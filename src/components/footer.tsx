import { footerLinksData } from "../data/footerData";
import appStore from "../assets/Footer/appStore.svg";
import googlePlay from "../assets/Footer/googlePlay.svg";
import BottomDivider from "./bottomDivider";
import pageLogo from "../assets/pageLogo.svg";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="connections">
        <div className="connections__company">
          <div className="connection">
            <h3 className="connection__title">Product</h3>
            <div className="footer-links">
              {footerLinksData.footerProductData.map((link) => {
                return (
                  <p className="footer-links__title">
                    {link.title}{" "}
                    <span>
                      {link.hasBtn ? (
                        <Button
                          color="#027a48"
                          textSize={0.75}
                          height={1.375}
                          width="2.625rem"
                          backgroundColor="#ecfdf3"
                          borderColor="#ecfdf3"
                        >
                          New
                        </Button>
                      ) : (
                        ""
                      )}
                    </span>{" "}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="connection">
            <h3 className="connection__title">Company</h3>
            <div className="footer-links">
              {footerLinksData.footerCompanyData.map((link) => {
                return <p className="footer-links__title">{link.title}</p>;
              })}
            </div>
          </div>
          <div className="connection">
            <h3 className="connection__title">Resources</h3>
            <div className="footer-links">
              {footerLinksData.footerResourcesData.map((link) => {
                return <p className="footer-links__title">{link.title}</p>;
              })}
            </div>
          </div>
          <div className="connection">
            <h3 className="connection__title">Social</h3>
            <div className="footer-links">
              {footerLinksData.footerSocialData.map((link) => {
                return <p className="footer-links__title">{link.title}</p>;
              })}
            </div>
          </div>
          <div className="connection">
            <h3 className="connection__title">Legal</h3>
            <div className="footer-links">
              {footerLinksData.footerLegalData.map((link) => {
                return <p className="footer-links__title">{link.title}</p>;
              })}
            </div>
          </div>
        </div>
        <div className="apps">
          <p className="apps__label">Get the app</p>
          <div className="apps__stores">
            <img src={appStore} alt="App Store Logo" />
            <img src={googlePlay} alt="Google Play Logo" />
          </div>
        </div>
      </div>
      <BottomDivider />
      <div className="footer__credits">
        <img src={pageLogo} alt="Page Logo" className="footer__credits__img" />
        <p className="footer__credits__credit">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
