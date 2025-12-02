'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const companyLinks = [
    { name: "Partenaires", href: "#" },
    { name: "À propos", href: "#" },
    { name: "Carrières", href: "#" },
    { name: "Avis", href: "#" },
    { name: "Conditions d'utilisation", href: "#" }
  ];

  const usefulLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#solution" },
    { name: "Fonctionnalités", href: "#features" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Curved top edge with gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-white">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-20 sm:h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path
            fill="url(#footerGradient)"
            d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 px-4 sm:px-6">
        {/* Decorative circles */}
        <div className="hidden sm:block absolute top-40 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 bg-white/5 rounded-full"></div>
        <div className="hidden lg:block absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Soria<span className="text-white">.</span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Le répétiteur virtuel de votre enfant. Une application intelligente pour accompagner les élèves dans leur réussite scolaire.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.16.43.36,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.43-.16,1.06-.36,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.44.71-2.1,1.37C1.38,2.66.97,3.32.67,4.1.37,4.86.17,5.74.11,7.01.05,8.29.04,8.7.04,11.96s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.44,1.37,2.1.66.66,1.32,1.07,2.1,1.37.76.3,1.64.5,2.91.56,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.44-.71,2.1-1.37.66-.66,1.07-1.32,1.37-2.1.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.76-.3-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Z"/>
                    <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
                    <circle cx="18.41" cy="5.59" r="1.44"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                  aria-label="Google+"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48,10.92v3.28h7.84c-.24,1.84-.52,3.01-1.24,3.73-.88.88-2.08,1.36-3.6,1.36-3.24,0-5.76-2.88-5.76-6.32s2.52-6.32,5.76-6.32c1.44,0,2.56.52,3.36,1.32l2.52-2.52C19.84,4.04,17.36,3,14.48,3,9.12,3,4.72,7.36,4.72,12.72s4.4,9.72,9.76,9.72c2.88,0,5.04-.96,6.72-2.72,1.72-1.72,2.24-4.16,2.24-6.12,0-.52-.04-1.04-.12-1.44H12.48V10.92Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Informations</h4>
              <div className="w-10 sm:w-12 h-1 bg-white/30 mb-3 sm:mb-4 flex gap-1">
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Liens Utiles</h4>
              <div className="w-10 sm:w-12 h-1 bg-white/30 mb-3 sm:mb-4 flex gap-1">
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {usefulLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Contactez-nous</h4>
              <div className="w-10 sm:w-12 h-1 bg-white/30 mb-3 sm:mb-4 flex gap-1">
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
                <span className="w-2 h-1 bg-white"></span>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    <p>+229 01 00 00 00 00</p>
                    <p>+228 00 00 00 00</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    <p>info@soria-app.com</p>
                    <p>support@soria-app.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-white/80 text-xs sm:text-sm">
                    <p>Cotonou, Bénin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 sm:pt-8 border-t border-white/20">
            <p className="text-white/70 text-xs sm:text-sm">
              &copy; {currentYear} Soria. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 cursor-pointer"
          aria-label="Retour en haut"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
