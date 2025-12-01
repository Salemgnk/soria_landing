"use client"
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-24 pb-16 px-6">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-400 via-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[1200px] h-[1200px] bg-gradient-to-tl from-pink-500 via-purple-500 to-pink-400 rounded-full opacity-15 blur-3xl -z-10 translate-y-1/2"></div>
      
      {/* Small decorative shapes */}
      <div className="absolute top-32 left-16 w-16 h-16 border-4 border-pink-200 rounded-full opacity-40"></div>
      <div className="absolute top-48 left-32 w-12 h-12 bg-purple-200 rotate-45 opacity-30"></div>
      <div className="absolute bottom-32 left-24 w-20 h-20 border-4 border-orange-200 rotate-12 opacity-30"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-25"></div>
      <div className="absolute bottom-48 right-32 w-14 h-14 border-4 border-purple-200 rotate-45 opacity-35"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <span className="bg-purple-600 text-white px-2.5 py-0.5 rounded-full text-xs font-bold">Nouveau</span>
            Votre répétiteur virtuel disponible 24h/24
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1]">
            L'accompagnement scolaire{' '}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              qui s'adapte
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
            Soria est un répétiteur intelligent disponible 24h/24 qui explique les leçons, aide aux devoirs et accompagne votre enfant du primaire au lycée.
          </p>

          <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
            En Savoir Plus
          </button>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone frame with gradient border */}
            <div className="relative w-[320px] lg:w-[380px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-[3.5rem] p-3 shadow-2xl transform lg:rotate-[-8deg] lg:translate-x-8">
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-inner">
                {/* Phone screen content */}
                <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 h-[650px] relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                    <span className="font-medium">9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
                      <div className="w-3 h-3 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Accounts header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Mes Matières</h3>
                  </div>
                  
                  {/* Upgrade card */}
                  <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white p-5 rounded-2xl mb-6 shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">⭐ PRO</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold">Cours de Mathématiques</p>
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                  </div>

                  {/* Balance card */}
                  <div className="bg-white rounded-2xl p-5 mb-4 shadow-lg border border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Progression cette semaine</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">87%</h2>
                    <div className="h-2 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-full"></div>
                  </div>

                  {/* Transaction items */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl px-4 py-3.5 shadow-md border border-gray-100 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Français</p>
                        <p className="text-xs text-gray-500">15 exercices terminés</p>
                      </div>
                      <span className="text-green-600 text-sm font-bold">+12%</span>
                    </div>
                    
                    <div className="bg-white rounded-xl px-4 py-3.5 shadow-md border border-gray-100 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Histoire</p>
                        <p className="text-xs text-gray-500">8 fiches révisées</p>
                      </div>
                      <span className="text-purple-600 text-sm font-bold">+8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative floating element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;