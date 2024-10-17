import {
  basicPlanData,
  businessPlanData,
  plansFeaturesBasic,
  plansFeaturesBusiness,
} from "../data/plansData";
import Button from "./button";
import MainTitle from "./mainTitle";
import SubTitle from "./subTitle";
import TitleButton from "./titleButton";
import checkIcon from "../assets/checkIcon.svg";
import BottomDivider from "./bottomDivider";

const Pricing = () => {
  return (
    <div className="pricing">
      <TitleButton textSize={1} weight={600} hasBackground={false}>
        Pricing
      </TitleButton>
      <MainTitle>Plans that fit your scale</MainTitle>
      <SubTitle>
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </SubTitle>
      <div className="plans">
        {basicPlanData.map((plan) => {
          return (
            <div key={plan.id} className="plan">
              <div className="plan-title">
                <div className="plan-title__description">
                  <h3 className="plan-title__description__label">
                    {plan.planTitle}
                  </h3>
                  <p className="plan-title__description__about">
                    {plan.planDescription}
                  </p>
                </div>
                <div className="plan-title__prices">
                  <p className="plan-title__prices__valute">$</p>
                  <h4 className="plan-title__prices__price">10</h4>
                  <p className="plan-title__prices__rate">per month</p>
                </div>
              </div>
              <hr className="plan__divider" />
              <div className="plan-features">
                <p className="plan-features__label">FEATURES</p>
                <p className="plan-features__about">
                  Everything in our{" "}
                  <span className="plan-features__about__highlight">
                    free plan{" "}
                  </span>
                  plus....
                </p>
              </div>
              <div className="plan-benefits">
                {plansFeaturesBasic.map((feature) => {
                  return (
                    <div key={feature.id} className="plan-benefits__benefit">
                      <img src={checkIcon} alt="Check Icon" />
                      <p className="plan-benefits__benefit__label">
                        {feature.planFeatureInfo}
                      </p>
                    </div>
                  );
                })}
              </div>

              <hr className="plan__divider" />
              <Button height={3} width={"100%"}>
                Get Started
              </Button>
            </div>
          );
        })}
        {businessPlanData.map((plan) => {
          return (
            <div key={plan.id} className="plan">
              <div className="plan-title">
                <div className="plan-title__description">
                  <h3 className="plan-title__description__label">
                    {plan.planTitle}
                    <span>
                      <TitleButton>Popular</TitleButton>
                    </span>
                  </h3>
                  <p className="plan-title__description__about">
                    {plan.planDescription}
                  </p>
                </div>
                <div className="plan-title__prices">
                  <p className="plan-title__prices__valute">$</p>
                  <h4 className="plan-title__prices__price">20</h4>
                  <p className="plan-title__prices__rate">per month</p>
                </div>
              </div>
              <hr className="plan__divider" />
              <div className="plan-features">
                <p className="plan-features__label">FEATURES</p>
                <p className="plan-features__about">
                  Everything in our{" "}
                  <span className="plan-features__about__highlight">
                    basic plan{" "}
                  </span>
                  plus....
                </p>
              </div>
              <div className="plan-benefits">
                {plansFeaturesBusiness.map((feature) => {
                  return (
                    <div key={feature.id} className="plan-benefits__benefit">
                      <img src={checkIcon} alt="Check Icon" />
                      <p className="plan-benefits__benefit__label">
                        {feature.planFeatureInfo}
                      </p>
                    </div>
                  );
                })}
              </div>

              <hr className="plan__divider" />
              <Button height={3} width={"100%"}>
                Get Started
              </Button>
            </div>
          );
        })}
      </div>
      <BottomDivider />
    </div>
  );
};

export default Pricing;
