"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "📚",
      title: "Explications Claires",
      description: "Des explications adaptées au niveau de chaque élève, avec des exemples concrets et des illustrations.",
      number: "1"
    },
    {
      icon: "✏️",
      title: "Exercices Interactifs",
      description: "Des exercices personnalisés avec corrections instantanées et accompagnement pas à pas.",
      number: "2"
    },
    {
      icon: "🌙",
      title: "Disponible 24h/24",
      description: "Un accompagnement constant, sans se déplacer et disponible à tout moment de la journée.",
      number: "3"
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6 bg-[#1a0b2e] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-16 w-20 h-20 border-4 border-pink-200/20 rotate-45 opacity-30"></div>
      <div className="absolute bottom-32 right-24 w-16 h-16 bg-purple-300/10 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-32 w-12 h-12 border-4 border-orange-200/20 opacity-25"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Nos Fonctionnalités
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Soria combine intelligence artificielle et pédagogie pour offrir un accompagnement scolaire personnalisé et accessible à tous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              {/* Feature card */}
              <div className="text-center">
                {/* Illustration placeholder */}
                <div className="mb-8 relative h-56 flex items-center justify-center">
                  <div className="relative">
                    {/* Phone mockup illustration */}
                    <div className="w-32 h-56 bg-gradient-to-br from-gray-300 to-gray-200 rounded-[2rem] shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-2 bg-white rounded-[1.5rem] overflow-hidden">
                        <div className={`h-full bg-gradient-to-br ${
                          idx === 0 ? 'from-pink-50 to-purple-50' :
                          idx === 1 ? 'from-purple-50 to-pink-50' :
                          'from-blue-50 to-purple-50'
                        } flex items-center justify-center`}>
                          <span className="text-4xl">{feature.icon}</span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative person illustration */}
                    <div className="absolute -bottom-4 -right-8 w-16 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80"></div>
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                  activeFeature === idx ? 'text-pink-500' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 px-4">
                  {feature.description}
                </p>

                {/* Number badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-xl transition-all duration-300 ${
                  activeFeature === idx 
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/50' 
                    : 'bg-transparent border-2 border-pink-500 text-pink-500'
                }`}>
                  {feature.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
