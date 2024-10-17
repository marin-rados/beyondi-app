import Achievements from "../components/achievements";
import Activity from "../components/activity";
import Capabilities from "../components/capabilities";
import Features from "../components/features";
import Footer from "../components/footer";
import FrequentlyAskedQuestions from "../components/frequentlyAskedQuestions";
import Header from "../components/header";
import Integrations from "../components/integrations";
import Pricing from "../components/pricing";
import TrustedBy from "../components/trustedBy";

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <Activity />
      <Capabilities />
      <Integrations />
      <Achievements />
      <Features />
      <Pricing />
      <FrequentlyAskedQuestions />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default HomePage;
