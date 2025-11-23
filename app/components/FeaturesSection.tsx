export default function FeaturesSection() {
  const features = [
    "Explications de cours",
    "Aide aux devoirs",
    "Exercices intelligents",
    "Corrections détaillées",
    "Fiches de révision",
    "Quiz personnalisés",
    "Suivi de progression"
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Fonctionnalités
        </h2>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 bg-slate-800/30 p-4 rounded-lg border border-slate-800/50"
            >
              <span className="text-blue-400 text-lg">✓</span>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
