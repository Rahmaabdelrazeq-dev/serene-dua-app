import { Shield, Book, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Duaa</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that prayer is a powerful tool for mental and spiritual wellness. 
            Our platform connects you with authentic Islamic prayers from the Quran and 
            authentic Hadith, carefully selected to match your emotional state.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold">Authentic Sources</h3>
            <p className="text-muted-foreground text-sm">
              All prayers verified from Quran and authentic Hadith collections
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Book className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold">Clear Translation</h3>
            <p className="text-muted-foreground text-sm">
              Arabic text with transliteration and English translation
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold">Mental Wellness</h3>
            <p className="text-muted-foreground text-sm">
              Supporting emotional health through spiritual connection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
