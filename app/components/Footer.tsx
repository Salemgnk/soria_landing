export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0b2e] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Soria
            </span>
            <span className="text-pink-500">.</span>
          </h3>
          <p className="text-gray-400 text-lg">
            Le répétiteur virtuel de votre enfant
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="#hero" className="text-gray-400 hover:text-pink-400 transition-colors">
            Accueil
          </a>
          <a href="#features" className="text-gray-400 hover:text-pink-400 transition-colors">
            Fonctionnalités
          </a>
          <a href="#solution" className="text-gray-400 hover:text-pink-400 transition-colors">
            Pourquoi Soria
          </a>
          <a href="#screenshots" className="text-gray-400 hover:text-pink-400 transition-colors">
            L'application
          </a>
          <a href="#download" className="text-gray-400 hover:text-pink-400 transition-colors">
            Télécharger
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-all">
            <span className="text-purple-300">f</span>
          </a>
          <a href="#" className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600/40 rounded-full flex items-center justify-center transition-all">
            <span className="text-pink-300">t</span>
          </a>
          <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 rounded-full flex items-center justify-center transition-all">
            <span className="text-purple-300">in</span>
          </a>
          <a href="#" className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600/40 rounded-full flex items-center justify-center transition-all">
            <span className="text-pink-300">ig</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-purple-900/50">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Soria. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
