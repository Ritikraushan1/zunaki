"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-gray-900 mb-16">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="w-full aspect-[4/3] bg-gray-300 rounded-3xl overflow-hidden">
            <img 
              src="/placeholder-contact.jpg" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Numer"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none text-gray-900 placeholder-gray-400 bg-transparent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="px-16 py-4 bg-[#0a0a1a] text-white rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
