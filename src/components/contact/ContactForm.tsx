'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    budget: '',
    details: '',
    hearAbout: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website_url: '', // Honeypot field
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again or call us directly at (406) 555-0123.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-rustic p-8 border border-[#333333] text-center">
        <div className="w-16 h-16 bg-[#0A3A2E] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-[#0F0F0F] mb-4">
          Thank You!
        </h3>
        <p className="text-[#333333] mb-6 leading-relaxed">
          We&apos;ve received your message and will get back to you within 24 hours. 
          We&apos;re excited to learn more about your project!
        </p>
        <Button 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '', email: '', phone: '', service: '', timeline: '', 
              budget: '', details: '', hearAbout: ''
            });
          }}
          className="bg-[#0A3A2E] hover:bg-[#083529] text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-rustic p-8 border border-[#333333]">
      <h2 className="text-3xl font-heading font-bold text-[#0F0F0F] mb-8">
        Get Your Free Estimate
      </h2>
      
      {/* Name, Email, Phone Row */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent"
            placeholder="(406) 555-0123"
          />
        </div>
      </div>
      
      {/* Service Interest and Timeline Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent bg-white"
          >
            <option value="">Select a service</option>
            <option value="custom-cabinetry">Custom Cabinetry</option>
            <option value="trim-molding">Trim & Molding</option>
            <option value="built-in-storage">Built-in Storage</option>
            <option value="custom-furniture">Custom Furniture</option>
            <option value="consultation">Just Need Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent bg-white"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-3-months">1-3 Months</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="6-12-months">6-12 Months</option>
            <option value="just-planning">Just Planning</option>
          </select>
        </div>
      </div>
      
      {/* Budget Range */}
      <div className="mb-6">
        <label htmlFor="budget" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent bg-white"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-15k">$5,000 - $15,000</option>
          <option value="15k-30k">$15,000 - $30,000</option>
          <option value="30k-50k">$30,000 - $50,000</option>
          <option value="over-50k">Over $50,000</option>
          <option value="need-estimate">Need Estimate</option>
        </select>
      </div>
      
      {/* Project Details */}
      <div className="mb-6">
        <label htmlFor="details" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent resize-vertical"
          placeholder="Tell us about your project vision, specific requirements, measurements, or any questions you have..."
        />
      </div>
      
      {/* How did you hear about us */}
      <div className="mb-8">
        <label htmlFor="hearAbout" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
          How did you hear about us?
        </label>
        <select
          id="hearAbout"
          name="hearAbout"
          value={formData.hearAbout}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[#333333] rounded-rustic focus:outline-none focus:ring-2 focus:ring-[#0A3A2E] focus:border-transparent bg-white"
        >
          <option value="">Please select</option>
          <option value="google">Google Search</option>
          <option value="referral">Friend/Family Referral</option>
          <option value="social-media">Social Media</option>
          <option value="previous-client">Previous Client</option>
          <option value="contractor-referral">Contractor Referral</option>
          <option value="local-ad">Local Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-[#0A3A2E] hover:bg-[#083529] text-white px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send My Request'}
      </Button>
      
      <p className="text-sm text-[#333333] mt-4 text-center">
        * Required fields. Your information is secure and never shared.
      </p>
    </form>
  );
}