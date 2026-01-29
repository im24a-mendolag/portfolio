'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-900/30 border border-green-500 text-green-300'
                    : 'bg-red-900/30 border border-red-500 text-red-300'
                }`}
              >
                <p>{submitStatus.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder={contactInfo.email}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full bg-gray-900 border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-white p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black p-3 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-white p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black p-3 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.github.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-white p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black p-3 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.linkedin.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-white p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                    <img
                      src="/leetcode_logo.png"
                      alt="LeetCode"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">LeetCode</h3>
                    <a
                      href={contactInfo.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {contactInfo.leetcode.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
