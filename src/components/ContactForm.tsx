import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const FORMSPREE_FORM_ID = 'mnjgnvew';

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    startDate: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        startDate: '',
        description: ''
      });
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or call us directly at (402) 917-3857');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <section id="contact" className="py-24 bg-cream border-t border-sage/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sage font-bold tracking-wider text-sm uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deepTeal mb-6">
            Let's Build Something Beautiful
          </h2>
          <p className="text-lg text-deepTeal/70">
            Ready to start your renovation journey? Fill out the form below and
            we'll be in touch to schedule your consultation.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl shadow-deepTeal/5 border border-sage/20">
          {isSuccess ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="text-center py-16">

              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-deepTeal mb-4">
                Message Received!
              </h3>
              <p className="text-deepTeal/70 max-w-md mx-auto">
                Thank you for reaching out. Our team will review your project
                details and get back to you within 2 business days.
              </p>
              <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-teal font-medium hover:text-deepTeal underline">

                Send another message
              </button>
            </motion.div> :

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                  htmlFor="name"
                  className="block text-sm font-medium text-deepTeal">

                    Name
                  </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  placeholder="John Doe" />

                </div>
                <div className="space-y-2">
                  <label
                  htmlFor="email"
                  className="block text-sm font-medium text-deepTeal">

                    Email
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  placeholder="john@example.com" />

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-deepTeal">

                    Phone
                  </label>
                  <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  placeholder="(402) 555-0123" />

                </div>
                <div className="space-y-2">
                  <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-deepTeal">

                    Project Type
                  </label>
                  <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all appearance-none">

                    <option value="">Select a type...</option>
                    <option value="Kitchen">Kitchen Remodel</option>
                    <option value="Bathroom">Bathroom Renovation</option>
                    <option value="Basement">Basement Finishing</option>
                    <option value="Addition">Home Addition</option>
                    <option value="Outdoor">Outdoor Living</option>
                    <option value="Whole Home">Whole Home Renovation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-deepTeal">

                    Budget Range{' '}
                    <span className="text-deepTeal/50 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <select
                  id="budget"
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all appearance-none">

                    <option value="">Select range...</option>
                    <option value="Under $25k">Under $25k</option>
                    <option value="$25k-$50k">$25k - $50k</option>
                    <option value="$50k-$100k">$50k - $100k</option>
                    <option value="$100k-$200k">$100k - $200k</option>
                    <option value="$200k+">$200k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-deepTeal">

                    Preferred Start{' '}
                    <span className="text-deepTeal/50 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formState.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all" />

                </div>
              </div>

              <div className="space-y-2">
                <label
                htmlFor="description"
                className="block text-sm font-medium text-deepTeal">

                  Project Description
                </label>
                <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formState.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-cream border border-sage/30 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all resize-none"
                placeholder="Tell us about your vision, current issues, and what you hope to achieve..." />

              </div>

              {submitError && (
                <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
                  {submitError}
                </p>
              )}

              <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-deepTeal text-cream font-bold text-lg py-4 rounded-lg hover:bg-teal transition-all shadow-lg shadow-deepTeal/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">

                {isSubmitting ?
              <span className="flex items-center">
                    <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">

                      <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4">
                  </circle>
                      <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                    </svg>
                    Sending...
                  </span> :

              <span className="flex items-center">
                    Request a Consultation
                    <Send className="ml-2 h-5 w-5" />
                  </span>
              }
              </button>
            </form>
          }
        </div>
      </div>
    </section>);

}