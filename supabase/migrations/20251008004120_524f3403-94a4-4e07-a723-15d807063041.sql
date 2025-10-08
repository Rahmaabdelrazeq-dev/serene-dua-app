-- Create prayers table
CREATE TABLE prayers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  emotion_category TEXT NOT NULL,
  arabic_text TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  english_translation TEXT NOT NULL,
  source TEXT NOT NULL,
  tags TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_prayers_emotion ON prayers(emotion_category);
CREATE INDEX idx_prayers_active ON prayers(is_active);

-- Enable RLS (even though we'll make prayers public)
ALTER TABLE prayers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read prayers (public data)
CREATE POLICY "Anyone can view active prayers" 
ON prayers FOR SELECT 
USING (is_active = true);

-- Insert sample prayers for each emotion category
INSERT INTO prayers (emotion_category, arabic_text, transliteration, english_translation, source) VALUES
-- Happy/Grateful
('happy', 'الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ', 'Alhamdulillahil-ladhi bi ni''matihi tatimmus-salihat', 'All praise is due to Allah by Whose favor good things are perfected', 'Sahih Ibn Majah'),
('grateful', 'اللَّهُمَّ اجْعَلْنِي مِنَ الشَّاكِرِينَ', 'Allahumma aj''alni minash-shakirin', 'O Allah, make me among those who are grateful', 'Ibn Hibban'),
('happy', 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا', 'Allahumma inni as''aluka ''ilman nafi''an, wa rizqan tayyiban, wa ''amalan mutaqabbalan', 'O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds', 'Ibn Majah'),

-- Sad/Grief
('sad', 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', 'Inna lillahi wa inna ilayhi raji''un', 'Truly we belong to Allah, and truly to Him we shall return', 'Quran 2:156'),
('sad', 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', 'La ilaha illa anta subhanaka inni kuntu minaz-zalimin', 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers', 'Quran 21:87'),
('sad', 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', 'Hasbunallahu wa ni''mal-wakeel', 'Sufficient for us is Allah, and He is the best Disposer of affairs', 'Quran 3:173'),

-- Anxious/Stressed
('anxious', 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ', 'Allahumma inni a''udhu bika minal-hammi wal-hazan', 'O Allah, I seek refuge in You from anxiety and grief', 'Sahih Bukhari'),
('stressed', 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ', 'Ya Hayyu Ya Qayyum bi-rahmatika astaghith', 'O Ever-Living, O Self-Sustaining, by Your mercy I seek help', 'At-Tirmidhi'),
('anxious', 'اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', 'Allahumma rahmataka arju fala takilni ila nafsi tarfata ''ayn', 'O Allah, it is Your mercy that I hope for, so do not leave me in charge of my affairs even for a blink of an eye', 'Abu Dawud'),

-- Hopeful
('hopeful', 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', 'Inna ma''al-''usri yusra', 'Indeed, with hardship comes ease', 'Quran 94:6'),
('hopeful', 'وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ', 'Wa rahmati wasi''at kulla shay''', 'And My mercy encompasses all things', 'Quran 7:156'),

-- Angry
('angry', 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'A''udhu billahi minash-shaytanir-rajim', 'I seek refuge in Allah from the accursed Satan', 'Sahih Bukhari'),
('angry', 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْغَضَبِ', 'Allahumma inni a''udhu bika minal-ghadab', 'O Allah, I seek refuge in You from anger', 'Ahmad'),

-- Lonely
('lonely', 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', 'Wa huwa ma''akum ayna ma kuntum', 'And He is with you wherever you are', 'Quran 57:4'),
('lonely', 'فَإِنِّي قَرِيبٌ', 'Fa-inni qarib', 'Indeed, I am near', 'Quran 2:186'),

-- Peaceful
('peaceful', 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ', 'Allahumma antas-salam wa minkas-salam', 'O Allah, You are Peace and from You comes peace', 'Sahih Muslim'),
('peaceful', 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', 'Ala bi-dhikrillahi tatma''innul-qulub', 'Verily, in the remembrance of Allah do hearts find rest', 'Quran 13:28'),

-- Seeking Guidance
('seeking_guidance', 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ', 'Allahumma-hdini fiman hadayt', 'O Allah, guide me among those You have guided', 'Abu Dawud'),
('seeking_guidance', 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', 'Rabbi ishrah li sadri wa yassir li amri', 'My Lord, expand for me my breast and ease for me my task', 'Quran 20:25-26'),
('seeking_guidance', 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ', 'Allahumma inni astakhiruka bi-''ilmika', 'O Allah, I seek Your guidance through Your knowledge', 'Sahih Bukhari');