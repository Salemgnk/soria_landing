"use client";

import SpotlightCard from "@/components/SpotlightCard";

export default function WhySoriaSection() {
  return (
    <section id="why" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Le soutien scolaire le plus accessible.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <SpotlightCard className="p-8 rounded-xl bg-slate-900/50 border border-slate-800/50" spotlightColor="rgba(59, 130, 246, 0.3)">
            <div className="text-3xl mb-3">🌙</div>
            <h3 className="text-xl font-bold text-white mb-3">Disponible 24h/24</h3>
            <p className="text-gray-400 leading-relaxed">
              Soria répond même quand aucun répétiteur n'est disponible.
              L'enfant peut réviser tôt le matin, tard le soir ou le week-end.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-xl bg-slate-900/50 border border-slate-800/50" spotlightColor="rgba(168, 85, 247, 0.3)">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Adapté à chaque élève</h3>
            <p className="text-gray-400 leading-relaxed">
              L'explication s'ajuste au niveau réel de l'enfant, pour éviter qu'il soit perdu
              ou qu'il s'ennuie.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-xl bg-slate-900/50 border border-slate-800/50" spotlightColor="rgba(34, 197, 94, 0.3)">
            <div className="text-3xl mb-3">😊</div>
            <h3 className="text-xl font-bold text-white mb-3">Sans stress</h3>
            <p className="text-gray-400 leading-relaxed">
              L'élève pose ses questions librement, autant de fois qu'il le souhaite,
              sans peur de déranger ou d'être jugé.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-xl bg-slate-900/50 border border-slate-800/50" spotlightColor="rgba(249, 115, 22, 0.3)">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">Accessible</h3>
            <p className="text-gray-400 leading-relaxed">
              Un accompagnement constant, sans se déplacer et sans devoir trouver
              un répétiteur disponible chaque semaine.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
