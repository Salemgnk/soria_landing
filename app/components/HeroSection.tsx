import BlurText from "./ui/BlurText";
import SplashCursor from "@/components/SplashCursor";

export default function HeroSection() {
    return( 
         <div className="min-h-screen bg-gradient-to-br from-state-900 via-blue-900 text-white overflow-hidden relative flex flex-col items-center justify-center px-6 py-20">
            <SplashCursor />
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-96 h-96 bg-[rgba(0,71,171,0.22)] rounded-full mix-blend-multiply filter blur-3xl opacity-80 pointer-events-none"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-0 flex flex-col items-center justify-center leading-[1.3] text-left">
                            <BlurText
                                text="Soria"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="text-white"
                            />
                        </h1>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Transformez votre établissement avec la plateforme de suivi scolaire 
                        la plus avancée d'Afrique. Notifications instantanées, bulletins automatiques, 
                        et bien plus encore.
                    </p>
            </div>
            
         </div>
    )
}