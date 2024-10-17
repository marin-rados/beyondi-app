import Button from "./button";
import logo from "../assets/pageLogo.svg";
import arrowDown from "../assets/Header/arrowDown.svg";
import hamburgerIcon from "../assets/Header/hamburgerIcon.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="links">
          <img className="links__logo" src={logo} alt="Page Logo" />
          <img
            className="links__hamburger"
            src={hamburgerIcon}
            alt="Hamburger Icon"
          />
          <div className="links__link">
            <ul>Home</ul>
            <ul className="links__link__resources">
              Resources
              <img
                className="links__link__resources__expand"
                src={arrowDown}
                alt="Expand Icon"
              />
            </ul>
            <ul>Pricing</ul>
          </div>
        </div>
        <div className="actions">
          <p>Log in</p>
          <Button width="5.875rem">Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
