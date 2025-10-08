import { EMOTIONS } from "@/constants/emotions";
import { EmotionCard } from "./EmotionCard";

interface EmotionGridProps {
  onEmotionSelect: (emotionId: string) => void;
}

export const EmotionGrid = ({ onEmotionSelect }: EmotionGridProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How Are You Feeling?</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select your current emotional state to receive a prayer that speaks to your heart
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
        {EMOTIONS.map((emotion, index) => (
          <div
            key={emotion.id}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <EmotionCard
              emotion={emotion}
              onClick={() => onEmotionSelect(emotion.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
