"use client";

import SpotlightCard from "@/components/SpotlightCard";

export default function WhatIsSoriaSection() {
  return (
    <section id="what-is-soria" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Un répétiteur qui tient dans la main.
        </h2>
        <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Soria remplit exactement le rôle d'un répétiteur : expliquer, accompagner et entraîner l'élève.
          La différence ? Elle est toujours disponible, toujours patiente et totalement adaptée au rythme de l'enfant.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <SpotlightCard className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Elle explique</h3>
            <p className="text-gray-400 leading-relaxed">
              Cours, exercices, notions difficiles : Soria décompose tout étape par étape,
              avec des mots simples et des exemples concrets.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-white mb-3">Elle entraîne</h3>
            <p className="text-gray-400 leading-relaxed">
              Des exercices et des quiz personnalisés permettent à l'élève de pratiquer,
              corriger ses erreurs et consolider ses acquis.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Elle aide à réviser</h3>
            <p className="text-gray-400 leading-relaxed">
              Mini-résumés, questions essentielles, révisions ciblées avant les contrôles :
              Soria accompagne l'élève au bon moment.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
