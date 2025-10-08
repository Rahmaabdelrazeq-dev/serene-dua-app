import { 
  Smile, 
  Frown, 
  AlertCircle, 
  Heart, 
  HeartCrack, 
  Sparkles, 
  Flame, 
  User, 
  CloudSun,
  Compass 
} from 'lucide-react';
import { Emotion } from '@/types/emotion';

export const EMOTIONS: Emotion[] = [
  {
    id: 'happy',
    name: 'Happy',
    description: 'Feeling joy and gratitude',
    icon: Smile,
    colorClass: 'bg-emotion-happy',
  },
  {
    id: 'grateful',
    name: 'Grateful',
    description: 'Thankful and appreciative',
    icon: Heart,
    colorClass: 'bg-emotion-grateful',
  },
  {
    id: 'sad',
    name: 'Sad',
    description: 'Feeling down or grieving',
    icon: Frown,
    colorClass: 'bg-emotion-sad',
  },
  {
    id: 'anxious',
    name: 'Anxious',
    description: 'Worried or uncertain',
    icon: AlertCircle,
    colorClass: 'bg-emotion-anxious',
  },
  {
    id: 'stressed',
    name: 'Stressed',
    description: 'Overwhelmed or pressured',
    icon: HeartCrack,
    colorClass: 'bg-emotion-stressed',
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    description: 'Looking forward with optimism',
    icon: Sparkles,
    colorClass: 'bg-emotion-hopeful',
  },
  {
    id: 'angry',
    name: 'Angry',
    description: 'Feeling frustrated or upset',
    icon: Flame,
    colorClass: 'bg-emotion-angry',
  },
  {
    id: 'lonely',
    name: 'Lonely',
    description: 'Feeling isolated or alone',
    icon: User,
    colorClass: 'bg-emotion-lonely',
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    description: 'Calm and serene',
    icon: CloudSun,
    colorClass: 'bg-emotion-peaceful',
  },
  {
    id: 'seeking_guidance',
    name: 'Seeking Guidance',
    description: 'Looking for direction',
    icon: Compass,
    colorClass: 'bg-emotion-seeking',
  },
];
