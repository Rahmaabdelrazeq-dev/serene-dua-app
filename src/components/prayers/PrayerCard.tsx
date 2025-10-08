import { Prayer } from "@/types/prayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Share2, RotateCw, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PrayerCardProps {
  prayer: Prayer;
  onBack: () => void;
  onAnother: () => void;
}

export const PrayerCard = ({ prayer, onBack, onAnother }: PrayerCardProps) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    const text = `${prayer.arabic_text}\n\n${prayer.transliteration}\n\n${prayer.english_translation}\n\nSource: ${prayer.source}`;
    
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Prayer copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    const text = `${prayer.english_translation}\n\n- ${prayer.source}`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (error) {
        console.log('Share canceled');
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      {/* Back button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-8 hover:bg-secondary"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Emotions
      </Button>

      {/* Prayer card */}
      <Card className="p-8 md:p-12 shadow-large bg-gradient-to-b from-card to-secondary/20">
        <div className="space-y-8">
          {/* Arabic text */}
          <div className="text-center">
            <p className="arabic-text text-3xl md:text-4xl leading-loose text-primary">
              {prayer.arabic_text}
            </p>
          </div>

          {/* Transliteration */}
          <div className="text-center border-t border-b border-border py-6">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              {prayer.transliteration}
            </p>
          </div>

          {/* English translation */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              {prayer.english_translation}
            </p>
          </div>

          {/* Source */}
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Source: <span className="font-semibold text-accent">{prayer.source}</span>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center pt-6">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="gap-2"
            >
              <Copy size={18} />
              Copy
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              className="gap-2"
            >
              <Share2 size={18} />
              Share
            </Button>
            <Button
              onClick={onAnother}
              variant="default"
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <RotateCw size={18} />
              Show Another Prayer
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
