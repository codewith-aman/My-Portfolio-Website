import { ChevronDown } from "lucide-react"

export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:text-6xl tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}Aman</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Singh</span>
                </h1>
                <p className="text-md md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    A creative Frontend Developer navigating the universe of UI with React & Vue <br />
                    - crafting seamless, high-performance interfaces with pixel-perfect designs, that users love. 
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <ChevronDown className="h-16 w-16 text-primary font-extrabold text-glow" />
        </div>
        
    </section>
    ) 
}