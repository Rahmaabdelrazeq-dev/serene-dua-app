import { supabase } from "@/integrations/supabase/client";
import { Prayer } from "@/types/prayer";

export async function getPrayersByEmotion(emotion: string): Promise<Prayer[]> {
  const { data, error } = await supabase
    .from('prayers')
    .select('*')
    .eq('emotion_category', emotion)
    .eq('is_active', true);

  if (error) {
    console.error('Error fetching prayers:', error);
    throw error;
  }

  return data || [];
}

export async function getRandomPrayer(emotion: string): Promise<Prayer | null> {
  const prayers = await getPrayersByEmotion(emotion);
  
  if (prayers.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * prayers.length);
  return prayers[randomIndex];
}
