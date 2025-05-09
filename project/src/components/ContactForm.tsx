import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from './Button';
import { Check } from 'lucide-react';
import { submitInquiry } from '../services/api';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  licenseCount: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  licenseCount?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    licenseCount: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const licenseOptions = [
    { value: '', label: 'Select license type' },
    { value: 'microsoft', label: 'Microsoft Office' },
    { value: 'adobe', label: 'Adobe Creative Cloud' },
    { value: 'autocad', label: 'AutoCAD' },
    { value: 'oracle', label: 'Oracle' },
    { value: 'sap', label: 'SAP' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is being edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (formData.licenseCount && !/^\d+$/.test(formData.licenseCount)) {
      newErrors.licenseCount = 'Please enter a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Modified handleSubmit function to use the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Call the API to submit the inquiry
        await submitInquiry({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          licenseType: formData.licenseType,
          licenseCount: formData.licenseCount,
          message: formData.message
        });
        
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          licenseCount: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-soft-lg p-8 md:p-12 ${
            inView ? 'animate-fadeIn' : 'opacity-0'
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-900/30 mb-6">
                <Check size={32} className="text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                We've received your request and will get back to you with a valuation within 24 hours.
              </p>
              <Button 
                variant="primary"
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  Get a Free License Valuation
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Fill out the form below and our experts will assess the value of your licenses
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                          : 'border-neutral-300 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                          : 'border-neutral-300 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white ${
                      errors.company 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                        : 'border-neutral-300 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500'
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      License Type*
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white ${
                        errors.licenseType 
                          ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                          : 'border-neutral-300 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500'
                      }`}
                    >
                      {licenseOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.licenseType}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseCount" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Number of Licenses
                    </label>
                    <input
                      type="text"
                      id="licenseCount"
                      name="licenseCount"
                      value={formData.licenseCount}
                      onChange={handleChange}
                      placeholder="e.g., 10"
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white ${
                        errors.licenseCount 
                          ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                          : 'border-neutral-300 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500'
                      }`}
                    />
                    {errors.licenseCount && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.licenseCount}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your licenses or specific requirements..."
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  ></textarea>
                </div>

                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto px-8"
                  >
                    {isSubmitting ? 'Processing...' : 'Get My Valuation'}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;