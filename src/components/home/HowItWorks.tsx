import { Heart, BookOpen, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "Select Your Emotion",
      description: "Choose how you're feeling right now from our curated list of emotional states.",
    },
    {
      icon: BookOpen,
      title: "Receive a Prayer",
      description: "Get an authentic Islamic prayer (Duaa) specifically chosen for your emotional state.",
    },
    {
      icon: Sparkles,
      title: "Find Peace",
      description: "Read, reflect, and find spiritual comfort through the power of prayer.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to find the spiritual guidance you need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <step.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
