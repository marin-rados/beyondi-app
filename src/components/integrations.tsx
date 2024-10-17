import {
  integrationsDataOne,
  integrationsDataTwo,
} from "../data/integrationsData";
import BottomDivider from "./bottomDivider";
import MainTitle from "./mainTitle";
import More from "./more";
import SubTitle from "./subTitle";
import TitleButton from "./titleButton";

const Integrations = () => {
  return (
    <div className="integrations">
      <div className="integrations__header">
        <TitleButton>Integrations</TitleButton>
        <MainTitle>Get more value from your tools</MainTitle>
        <SubTitle>
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </SubTitle>
      </div>
      <div className="integrations-platforms">
        {integrationsDataOne.map((platform) => {
          return (
            <div key={platform.id} className="platform">
              <img
                src={platform.icon}
                alt={platform.platformName + " Icon"}
                className="platform__img"
              />
              <p className="platform__title">{platform.title}</p>
              <p className="platform__info">
                Work faster and smarter by integrating directly with
                {" " + platform.platformName}, right in the app.
              </p>
              <More children="View integration" />
            </div>
          );
        })}
      </div>
      <div className="integrations-platforms">
        {integrationsDataTwo.map((platform) => {
          return (
            <div key={platform.id} className="platform">
              <img
                src={platform.icon}
                alt={platform.platformName + " Icon"}
                className="platform__img"
              />
              <p className="platform__title">{platform.title}</p>
              <p className="platform__info">
                Work faster and smarter by integrating directly with
                {" " + platform.platformName}, right in the app.
              </p>
              <More children="View integration" />
            </div>
          );
        })}
      </div>
      <BottomDivider />
    </div>
  );
};

export default Integrations;
