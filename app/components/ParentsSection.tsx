export default function ParentsSection() {
  return (
    <section id="parents" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Un appui fiable pour le suivi scolaire.
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Avec Soria, votre enfant n'est plus jamais bloqué seul sur un devoir.
          Vous gagnez du temps, vous êtes rassuré, et votre enfant utilise son téléphone pour apprendre.
        </p>

        <ul className="max-w-3xl mx-auto space-y-4">
          <li className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-lg border border-slate-800/50">
            <span className="text-blue-400 text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">Plus besoin de chercher un répétiteur chaque semaine</span>
          </li>
          <li className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-lg border border-slate-800/50">
            <span className="text-blue-400 text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">Un soutien pédagogique constant, à portée de main</span>
          </li>
          <li className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-lg border border-slate-800/50">
            <span className="text-blue-400 text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">Votre enfant développe autonomie et confiance</span>
          </li>
          <li className="flex items-start gap-4 bg-slate-800/30 p-6 rounded-lg border border-slate-800/50">
            <span className="text-blue-400 text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">Une solution simple et accessible pour tous les foyers</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
