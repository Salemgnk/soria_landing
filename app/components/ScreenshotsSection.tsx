"use client";

export default function ScreenshotsSection() {
  const screenshots = [
    {
      title: "Cours Interactifs",
      description: "Des leçons claires avec illustrations et exemples concrets",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Exercices Personnalisés",
      description: "Des exercices adaptés au niveau de chaque élève",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Suivi de Progression",
      description: "Tableaux de bord pour suivre les progrès en temps réel",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="screenshots" className="relative py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-16 w-20 h-20 border-4 border-pink-200/40 rotate-45"></div>
      <div className="hidden md:block absolute bottom-32 right-24 w-16 h-16 bg-blue-200/30 rounded-full"></div>
      <div className="hidden lg:block absolute top-1/3 right-16 w-24 h-24 border-4 border-orange-200/30 rotate-12"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 md:mb-6 px-4">
            L'Application Soria
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4">
            Une interface intuitive et ludique conçue pour rendre l'apprentissage agréable et efficace pour tous les élèves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {screenshots.map((screenshot, idx) => (
            <div 
              key={idx}
              className="group"
            >
              {/* Phone mockup */}
              <div className="relative mx-auto w-48 sm:w-56 md:w-64 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                {/* Phone frame */}
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl">
                  <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                    {/* Screen content */}
                    <div className={`h-[380px] sm:h-[450px] md:h-[500px] bg-gradient-to-br ${screenshot.color} p-4 sm:p-6 relative overflow-hidden`}>
                      {/* Decorative elements inside phone */}
                      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      
                      {/* Content placeholder */}
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="text-right mb-3 sm:mb-4">
                          <span className="text-white/80 text-xs">9:41</span>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                              <span className="text-2xl sm:text-3xl">📱</span>
                            </div>
                            <h3 className="text-white font-bold text-base sm:text-lg mb-2">{screenshot.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl h-12 sm:h-16"></div>
                          <div className="bg-white/15 backdrop-blur-sm rounded-lg sm:rounded-xl h-10 sm:h-12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shadow effect */}
                <div className="hidden sm:block absolute inset-0 -z-10 bg-gradient-to-br from-purple-200 to-pink-200 rounded-[2.5rem] blur-2xl opacity-30 scale-90"></div>
              </div>

              {/* Description */}
              <div className="text-center mt-4 sm:mt-6 px-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
