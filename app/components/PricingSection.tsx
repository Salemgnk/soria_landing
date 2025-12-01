"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Découverte",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Pour essayer Soria",
      features: [
        "5 questions par jour",
        "Accès aux exercices de base",
        "1 matière au choix",
        "Support communautaire"
      ],
      popular: false
    },
    {
      name: "Essentiel",
      monthlyPrice: 9,
      annualPrice: 7,
      description: "Pour un accompagnement régulier",
      features: [
        "Questions illimitées",
        "Toutes les matières",
        "Exercices personnalisés",
        "Suivi de progression"
      ],
      popular: true
    },
    {
      name: "Premium",
      monthlyPrice: 15,
      annualPrice: 12,
      description: "Pour une réussite garantie",
      features: [
        "Tout de l'Essentiel",
        "Rapports détaillés",
        "Préparation aux examens",
        "Support prioritaire"
      ],
      popular: false
    },
    {
      name: "Famille",
      monthlyPrice: 25,
      annualPrice: 20,
      description: "Pour toute la famille",
      features: [
        "Jusqu'à 4 enfants",
        "Tout du Premium",
        "Tableau de bord parents",
        "Conseils personnalisés"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-16 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-purple-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-24 text-pink-300 text-2xl opacity-40">✕</div>
      <div className="absolute top-1/3 left-10 w-8 h-8 border-2 border-yellow-300 rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 right-32 w-5 h-5 bg-pink-300 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-10 text-pink-300 text-xl opacity-40">✕</div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Nos Tarifs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choisissez la formule qui correspond le mieux aux besoins de votre enfant.
            Annulez à tout moment, sans engagement.
          </p>
        </div>

        {/* Toggle Monthly/Annual */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
            Annuel
          </span>
          {isAnnual && (
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
              -20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'shadow-lg shadow-pink-500/20 border-2 border-pink-500'
                  : 'shadow-md border border-gray-100 hover:border-purple-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-pink-600' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-purple-500 text-lg">€</span>
                  <span className={`text-5xl font-black ${plan.popular ? 'text-pink-600' : 'text-purple-600'}`}>
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-pink-500 text-sm font-medium">/ Mois</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105'
                }`}
              >
                COMMENCER
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
