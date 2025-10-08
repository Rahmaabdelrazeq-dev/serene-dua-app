import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,hsl(177,35%,27%)_1px,transparent_1px)] bg-[length:24px_24px]" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Find Peace Through{" "}
          <span className="gradient-text">Prayer</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Personalized Islamic prayers for your current emotional state. 
          Let authentic Duaa guide you to spiritual comfort.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-large transition-all duration-300"
          >
            Select Your Feeling
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};
