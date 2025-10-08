import { useNavigate } from "react-router-dom";
import { EmotionGrid } from "@/components/emotions/EmotionGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleEmotionSelect = (emotionId: string) => {
    navigate(`/prayer/${emotionId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <EmotionGrid onEmotionSelect={handleEmotionSelect} />
      </main>
      <Footer />
    </div>
  );
};

export default SelectionPage;
