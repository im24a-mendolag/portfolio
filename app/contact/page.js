'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or email service integration here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
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
                  className="w-full bg-[#111111] border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors"
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
                  className="w-full bg-[#111111] border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors"
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
                  rows={6}
                  className="w-full bg-black border border-white px-4 py-3 rounded-lg text-white focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-[#111111] border border-white p-6 rounded-lg">
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

              <div className="bg-[#111111] border border-white p-6 rounded-lg">
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

              <div className="bg-[#111111] border border-white p-6 rounded-lg">
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

              <div className="bg-[#111111] border border-white p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-black p-3 rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Twitter</h3>
                    <a
                      href={contactInfo.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      @{contactInfo.twitter.split('/').pop()}
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
