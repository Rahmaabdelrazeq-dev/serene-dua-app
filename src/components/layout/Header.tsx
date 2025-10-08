import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Heart className="text-primary" size={28} />
          <span className="text-2xl font-bold">Duaa</span>
        </Link>
      </div>
    </header>
  );
};
