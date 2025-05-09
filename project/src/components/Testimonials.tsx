import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Hear from businesses that have successfully sold their software licenses through SoftSell
          </p>
        </div>

        <div 
          ref={ref}
          className={`max-w-6xl mx-auto ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsized."
              name="Sarah Johnson"
              position="IT Director"
              company="Nexus Technologies"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
            />

            <TestimonialCard 
              quote="The process was incredibly simple and transparent. We had the money in our account within a week."
              name="Michael Chen"
              position="CFO"
              company="DataSphere Inc."
              image="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;