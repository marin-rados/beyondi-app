import featuresDesktop from "../assets/Features/desktop-and-mobile-overview.png";
import featuresMobile from "../assets/Features/features-mobile.png";
import Capabilities from "./capabilities";
import BottomDivider from "./bottomDivider";
import TitleButton from "./titleButton";

const Features = () => {
  return (
    <div className="features">
      <TitleButton>Features</TitleButton>
      <h2 className="features__title">
        Cutting-edge features for advanced analytics
      </h2>
      <p className="features__info">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <img
        src={featuresDesktop}
        alt="Features Desktop Image"
        className="features__image-desktop"
      />
      <img
        src={featuresMobile}
        alt="Features Mobile Image"
        className="features__image-mobile"
      />
      <Capabilities pd={0} bgColor="#fff" hasMore={true} />
      <BottomDivider />
    </div>
  );
};

export default Features;
