export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Témoignages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-slate-900/50 p-8 rounded-xl border border-slate-800/50">
            <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
              « Ma fille comprend mieux et fait ses devoirs plus vite. »
            </p>
            <p className="text-blue-400 font-medium text-sm">— Parent d'élève</p>
          </article>

          <article className="bg-slate-900/50 p-8 rounded-xl border border-slate-800/50">
            <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
              « Je pose toutes mes questions à Soria et je révise plus facilement. »
            </p>
            <p className="text-blue-400 font-medium text-sm">— Élève de 4e</p>
          </article>
        </div>
      </div>
    </section>
  );
}
