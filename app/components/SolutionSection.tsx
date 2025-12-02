"use client";

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full opacity-15 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        {/* Left side - Phone mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
            {/* Phone frame */}
            <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl">
              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                {/* Screen content */}
                <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 sm:p-6 h-[500px] sm:h-[600px] relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Profile header */}
                  <div className="mb-6">
                    <h3 className="text-sm text-purple-600 font-semibold mb-4">Profil Étudiant</h3>
                    <div className="bg-white rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                        <div>
                          <h4 className="font-bold text-gray-900">Emma Dupont</h4>
                          <p className="text-sm text-gray-500">3ème - Collège</p>
                        </div>
                      </div>

                      {/* Stats card */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                        <p className="text-xs text-gray-600 mb-1">Progression ce mois</p>
                        <p className="text-2xl font-bold text-purple-600">+25%</p>
                      </div>

                      {/* Category buttons */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-50 rounded-lg py-3 text-center">
                          <p className="text-xs text-gray-600 font-medium">Maths</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg py-3 text-center">
                          <p className="text-xs text-gray-600 font-medium">Français</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg py-3 text-center">
                          <p className="text-xs text-gray-600 font-medium">Sciences</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating element */}
            <div className="hidden sm:block absolute -top-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-purple-300 to-pink-400 rounded-full opacity-20 blur-2xl animate-pulse delay-75"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Le soutien scolaire le plus{' '}
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              accessible
            </span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Soria transforme l'apprentissage en une expérience interactive et personnalisée, accessible à tous, partout et à tout moment.
          </p>

          <div className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:mx-0">
            {[
              "Aide aux devoirs en temps réel",
              "Explications adaptées au niveau",
              "Corrections détaillées et instantanées",
              "Fiches de révision personnalisées",
              "Suivi de progression continu"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-start">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 sm:mt-10 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto mx-auto lg:mx-0 block">
            En Savoir Plus
          </button>
        </div>
      </div>
    </section>
  );
}
