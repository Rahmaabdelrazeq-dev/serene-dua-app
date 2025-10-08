import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="text-primary" size={20} />
          <span className="text-lg font-semibold">Duaa</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Find peace through prayer. May Allah grant you tranquility.
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          All prayers sourced from the Quran and authentic Hadith collections
        </p>
      </div>
    </footer>
  );
};
