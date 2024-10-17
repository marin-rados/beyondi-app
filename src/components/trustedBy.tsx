import { trustedByData } from "../data/trustedByData";
import Button from "./button";
import MainTitle from "./mainTitle";
import SubTitle from "./subTitle";

const TrustedBy = () => {
  return (
    <div className="trustedby">
      <div className="trustedby__card">
        <p className="trustedby__card__title">Trusted by 4,000 companies</p>
        <div className="companies">
          {trustedByData.map((company) => {
            return (
              <img
                className="companies__img"
                key={company.id}
                src={company.icon}
                alt="Company Logo"
              />
            );
          })}
        </div>
      </div>
      <div className="trial">
        <div className="trial__titles">
          <MainTitle color="#fff">Start your free trial</MainTitle>
          <SubTitle color="#e9d7fe">
            Join over 4,000+ startups already growing with Untitled.
          </SubTitle>
        </div>
        <div className="trial__actions">
          <Button backgroundColor="#fff" color="#344054" height={3} width="90%">
            Learn More
          </Button>
          <Button height={3} width="90%">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
