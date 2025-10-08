import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { About } from "@/components/home/About";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/select');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero onGetStarted={handleGetStarted} />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
