export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Simple pour l'élève. Efficace pour les révisions.
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Un processus en 4 étapes pour accompagner l'apprentissage
        </p>

        <div className="space-y-8">
          <article className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-xl font-bold text-blue-400 border border-blue-500/30">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">L'élève pose sa question</h3>
              <p className="text-gray-400">
                Il écrit sa question, prend en photo un exercice ou choisit une leçon à revoir
                directement dans l'application.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-xl font-bold text-purple-400 border border-purple-500/30">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Soria explique clairement</h3>
              <p className="text-gray-400">
                Soria propose une explication adaptée à son niveau, avec une méthode, des exemples
                et des étapes faciles à suivre.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-xl font-bold text-green-400 border border-green-500/30">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Soria propose des exercices adaptés</h3>
              <p className="text-gray-400">
                Des exercices progressifs sont générés automatiquement pour l'aider à s'entraîner,
                avec des corrections instantanées.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center text-xl font-bold text-orange-400 border border-orange-500/30">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">L'élève révise et progresse</h3>
              <p className="text-gray-400">
                L'élève voit ce qu'il maîtrise déjà et ce qu'il doit encore revoir.
                Il progresse à son rythme, de façon régulière.
              </p>
            </div>
          </article>
        </div>


      </div>
    </section>
  );
}
