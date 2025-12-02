"use client";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-16 md:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden sm:block absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-pink-400/20 rounded-full blur-xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-4">
          Téléchargez Soria
        </h2>
        <p className="text-base sm:text-lg text-purple-100 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Disponible sur iOS et Android. Commencez l'aventure éducative dès aujourd'hui !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-6 sm:mb-8 px-4">
          <a
            href="#"
            className="group bg-white hover:bg-gray-50 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 w-full sm:min-w-[280px] font-semibold text-sm sm:text-base"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <span className="whitespace-nowrap">Télécharger sur Play Store</span>
          </a>
          
          <a
            href="#"
            className="group bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 w-full sm:min-w-[280px] font-semibold text-sm sm:text-base"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            <span className="whitespace-nowrap">Télécharger sur App Store</span>
          </a>
        </div>

        <p className="text-purple-100 text-xs sm:text-sm px-4">
          📱 Compatible iOS et Android • 🎓 Du primaire au lycée
        </p>
      </div>
    </section>
  );
}
