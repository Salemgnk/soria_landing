"use client";

import TextType from "@/components/TextType";
import SplashCursor from "@/components/SplashCursor";
import Iridescence from "@/components/Iridescence";

export default function HeroSection() {
    return( 
         <section id="hero" className="min-h-screen bg-white overflow-hidden relative flex flex-col items-center justify-center px-6 py-20 pt-32">
            <SplashCursor />
            
            {/* Iridescence background */}
            <div className="absolute inset-0 opacity-40">
                <Iridescence 
                    color={[0.2, 0.4, 0.9]}
                    speed={0.5}
                    amplitude={0.005}
                    mouseReact={true}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-slate-900">
                    <TextType
                        text="Soria"
                        as="span"
                        typingSpeed={50}
                        loop={false}
                        showCursor={false}
                        className="text-slate-900"
                    />
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-700 mb-16 leading-relaxed max-w-4xl mx-auto">
                    Un répétiteur intelligent, disponible 24h/24, qui explique les leçons, aide aux devoirs,
                    propose des exercices et accompagne l'enfant dans ses révisions au quotidien.
                </p>

                <p className="text-slate-600 text-base">
                    Pour les élèves du primaire au lycée.
                </p>
            </div>
         </section>
    )
}