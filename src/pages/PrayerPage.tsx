import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PrayerCard } from "@/components/prayers/PrayerCard";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Prayer } from "@/types/prayer";
import { getRandomPrayer } from "@/lib/supabaseClient";
import { Loader2 } from "lucide-react";

const PrayerPage = () => {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [prayer, setPrayer] = useState<Prayer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPrayer = async () => {
    if (!emotion) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const fetchedPrayer = await getRandomPrayer(emotion);
      if (fetchedPrayer) {
        setPrayer(fetchedPrayer);
      } else {
        setError("No prayers found for this emotion. Please try another.");
      }
    } catch (err) {
      setError("Failed to load prayer. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPrayer();
  }, [emotion]);

  const handleBack = () => {
    navigate('/select');
  };

  const handleAnother = () => {
    loadPrayer();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-destructive text-xl mb-4">{error}</p>
            <button
              onClick={handleBack}
              className="text-primary hover:underline"
            >
              Go back to emotions
            </button>
          </div>
        )}

        {!loading && !error && prayer && (
          <PrayerCard
            prayer={prayer}
            onBack={handleBack}
            onAnother={handleAnother}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PrayerPage;
