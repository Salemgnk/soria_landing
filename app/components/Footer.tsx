export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          &copy; {currentYear} Soria. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
