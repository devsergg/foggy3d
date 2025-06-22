'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData } from '@/types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    inquiryType: 'custom-part',
    message: '',
    projectDetails: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const inquiryTypes = [
    { value: 'custom-part', label: 'Custom Engineering Project', description: 'Complex parts, prototypes, or functional solutions' },
    { value: 'cad-printing', label: '3D Printing Services', description: 'High-quality printing of your provided CAD files' },
    { value: 'personalized-gift', label: 'Personalized Gift or Art', description: 'Custom decorative items, nameplates, or artistic pieces' },
    { value: 'bulk-order', label: 'Bulk Production Order', description: 'Large quantities of existing products' },
    { value: 'general', label: 'General Inquiry', description: 'Questions about our services or capabilities' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (formData.inquiryType === 'custom-part' && !formData.projectDetails?.trim()) {
      newErrors.projectDetails = 'Project details are required for custom engineering projects';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mnnvbkrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: formData.message,
          projectDetails: formData.projectDetails || '',
          _subject: `New ${formData.inquiryType.replace('-', ' ')} inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          inquiryType: 'custom-part',
          message: '',
          projectDetails: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Let&apos;s Bring Your Ideas to Life
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to start your custom project? Whether it&apos;s a complex engineering solution, high-quality printing of your CAD files, or a personalized gift, 
            we&apos;re here to help turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email Us</h4>
                  <p className="text-neutral-600">hello@foggy3d.com</p>
                  <p className="text-sm text-neutral-500">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Call Us</h4>
                  <p className="text-neutral-600">(415) 555-3D3D</p>
                  <p className="text-sm text-neutral-500">Mon-Fri 9AM-6PM PST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Based in San Francisco</h4>
                  <p className="text-neutral-600">Serving the Bay Area & beyond</p>
                  <p className="text-sm text-neutral-500">Local pickup & delivery available</p>
                </div>
              </div>
            </div>

            {/* Project Process */}
            <div className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200">
              <h4 className="font-bold text-black mb-4">Our Process</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Initial Consultation</span>
                  <span className="font-semibold text-primary-600">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Design & Quote</span>
                  <span className="font-semibold text-primary-600">2-5 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Production Time</span>
                  <span className="font-semibold text-primary-600">Varies*</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-700">Local Delivery</span>
                  <span className="font-semibold text-primary-600">Available</span>
                </div>
              </div>
              <p className="text-xs text-neutral-500 mt-3">*Production time depends on project complexity, materials, and quantity</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 rounded-2xl p-8 border-2 border-neutral-200">
            <h3 className="text-2xl font-bold text-black mb-6">Start Your Project</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-800 font-semibold">Thank you! We&apos;ll be in touch within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800 font-semibold">Something went wrong. Please try again or email us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-neutral-300 focus:border-primary-500'
                  }`}
                  placeholder="Enter your full name"
                  suppressHydrationWarning
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-neutral-300 focus:border-primary-500'
                  }`}
                  placeholder="your@email.com"
                  suppressHydrationWarning
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-black mb-2">
                  Type of Project *
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange('inquiryType', e.target.value as ContactFormData['inquiryType'])}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  suppressHydrationWarning
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-sm text-neutral-500">
                  {inquiryTypes.find(t => t.value === formData.inquiryType)?.description}
                </p>
              </div>

              {/* Project Details (for custom parts) */}
              {formData.inquiryType === 'custom-part' && (
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-vertical ${
                      errors.projectDetails ? 'border-red-300 bg-red-50' : 'border-neutral-300 focus:border-primary-500'
                    }`}
                    placeholder="Describe your engineering challenge, requirements, constraints, materials, timeline, etc."
                    suppressHydrationWarning
                  />
                  {errors.projectDetails && <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>}
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Additional Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-vertical ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-neutral-300 focus:border-primary-500'
                  }`}
                  placeholder="Tell us more about your project, budget, timeline, or any questions you have..."
                  suppressHydrationWarning
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-lg transition-colors ${
                  isSubmitting
                    ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                    : 'bg-primary-500 text-black hover:bg-primary-600'
                }`}
                suppressHydrationWarning
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-neutral-600"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-sm text-neutral-500 text-center">
              By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200">
              <h4 className="font-bold text-black mb-3">How much does a custom project cost?</h4>
              <p className="text-neutral-600">Project costs vary based on complexity, materials, and timeline. Simple modifications start around $50, while complex engineering projects can range from $200-$2000+. We always provide detailed quotes before starting work.</p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200">
              <h4 className="font-bold text-black mb-3">Do you print customer-provided CAD files?</h4>
              <p className="text-neutral-600">Absolutely! We provide high-quality 3D printing services for your CAD files. We work with STL, OBJ, 3MF, and STEP files at the highest quality possible. Don&apos;t have a 3D model? We can also create designs from sketches, photos, or detailed descriptions.</p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200">
              <h4 className="font-bold text-black mb-3">Do you offer rush orders?</h4>
              <p className="text-neutral-600">Yes! For urgent projects, we offer same-day and next-day printing for an additional fee. Contact us with your timeline and we&apos;ll let you know what&apos;s possible.</p>
            </div>
            
            <div className="bg-neutral-50 rounded-xl p-6 border-2 border-neutral-200">
              <h4 className="font-bold text-black mb-3">What&apos;s your quality guarantee?</h4>
              <p className="text-neutral-600">We stand behind every print. If you&apos;re not satisfied with the quality, we&apos;ll reprint or refund your order. For custom engineering projects, we iterate until the solution meets your requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 