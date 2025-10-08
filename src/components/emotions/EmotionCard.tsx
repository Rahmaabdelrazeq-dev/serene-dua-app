import { Emotion } from "@/types/emotion";
import { Card } from "@/components/ui/card";

interface EmotionCardProps {
  emotion: Emotion;
  onClick: () => void;
}

export const EmotionCard = ({ emotion, onClick }: EmotionCardProps) => {
  const Icon = emotion.icon;

  return (
    <Card
      onClick={onClick}
      className={`${emotion.colorClass} border-2 border-transparent hover:border-primary hover:shadow-medium transition-all duration-300 cursor-pointer p-6 group`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-primary" size={32} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{emotion.name}</h3>
          <p className="text-sm text-muted-foreground">{emotion.description}</p>
        </div>
      </div>
    </Card>
  );
};
