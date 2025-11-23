export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Ce que Soria fait au quotidien pour votre enfant.
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Des situations concrètes où Soria intervient
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-3">Bloqué sur un exercice</h3>
            <p className="text-gray-400">
              Soria reprend la consigne, explique la méthode, montre les étapes
              et aide l'élève à comprendre par lui-même.
            </p>
          </article>

          <article className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-3">Préparer un contrôle</h3>
            <p className="text-gray-400">
              L'application propose une révision ciblée : notions clés, questions fréquentes,
              mini-quiz pour vérifier que tout est compris.
            </p>
          </article>

          <article className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-3">Découvrir une nouvelle leçon</h3>
            <p className="text-gray-400">
              Soria reformule le cours avec des exemples simples, des comparaisons
              et des explications accessibles.
            </p>
          </article>

          <article className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-3">Envie de s'entraîner</h3>
            <p className="text-gray-400">
              Soria crée des quiz adaptés au niveau de l'élève pour l'aider
              à pratiquer régulièrement.
            </p>
          </article>

          <article className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50">
            <h3 className="text-xl font-bold text-white mb-3">Vérifier une réponse</h3>
            <p className="text-gray-400">
              L'élève peut demander à Soria de vérifier une réponse.
              L'application corrige et explique l'erreur si besoin.
            </p>
          </article>
        </div>


      </div>
    </section>
  );
}
