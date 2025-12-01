"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-6 h-6 border-2 border-cyan-300 rounded-full opacity-50"></div>
      <div className="absolute top-40 right-1/4 w-4 h-4 bg-purple-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-20 text-pink-300 text-2xl opacity-40">✕</div>
      <div className="absolute top-1/4 left-24 w-8 h-8 border-2 border-yellow-300 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 right-16 w-5 h-5 bg-pink-300 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-24 text-pink-300 text-xl opacity-40">✕</div>
      <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
      <div className="absolute top-32 right-10 w-6 h-6 border-2 border-purple-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Pink blob background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform -rotate-6 scale-110 opacity-60"></div>

              {/* Illustration container */}
              <div className="relative z-10 flex items-center justify-center py-12">
                {/* Person illustration */}
                <div className="relative">
                  {/* Chat bubbles */}
                  <div className="absolute -top-4 left-8 flex flex-col gap-2">
                    <div className="w-24 h-3 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
                    <div className="w-20 h-3 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
                    <div className="w-16 h-3 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
                  </div>

                  {/* Person body */}
                  <div className="flex flex-col items-center">
                    {/* Head */}
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full mb-2 relative">
                      {/* Hair */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-pink-600 to-pink-500 rounded-t-full"></div>
                    </div>

                    {/* Body */}
                    <div className="w-28 h-32 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-3xl relative">
                      {/* Arms holding phone */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-16 bg-gray-800 rounded-lg border-2 border-gray-700">
                        <div className="absolute inset-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded"></div>
                      </div>
                    </div>

                    {/* Legs */}
                    <div className="flex gap-2">
                      <div className="w-8 h-24 bg-gradient-to-b from-blue-800 to-blue-900 rounded-b-lg"></div>
                      <div className="w-8 h-24 bg-gradient-to-b from-blue-800 to-blue-900 rounded-b-lg"></div>
                    </div>

                    {/* Feet */}
                    <div className="flex gap-4 -mt-1">
                      <div className="w-10 h-4 bg-gray-500 rounded-full"></div>
                      <div className="w-10 h-4 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Decorative plant */}
                  <div className="absolute -bottom-4 -right-8">
                    <div className="w-1 h-16 bg-green-600"></div>
                    <div className="absolute bottom-8 left-0 w-4 h-4 bg-pink-400 rounded-full -translate-x-2"></div>
                    <div className="absolute bottom-12 left-0 w-4 h-4 bg-pink-400 rounded-full translate-x-1"></div>
                    <div className="absolute bottom-16 left-0 w-4 h-4 bg-pink-400 rounded-full -translate-x-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Une question sur Soria ? N'hésitez pas à nous contacter.
              Notre équipe vous répondra dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-200 focus:border-pink-500 outline-none transition-colors bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-200 focus:border-pink-500 outline-none transition-colors bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b border-gray-200 focus:border-pink-500 outline-none transition-colors bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-pink-500 outline-none transition-colors bg-transparent text-gray-800 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
