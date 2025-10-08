export interface Prayer {
  id: string;
  emotion_category: string;
  arabic_text: string;
  transliteration: string;
  english_translation: string;
  source: string;
  tags?: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
