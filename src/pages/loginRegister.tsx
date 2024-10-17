import { useLoginStore } from "../store/store";
import loginBg from "../assets/Login/login.png";
import registerBg from "../assets/Register/register.png";
import pageLogo from "../assets/pageLogo.svg";
import { useState } from "react";
import MainTitle from "../components/mainTitle";
import SubTitle from "../components/subTitle";
import Button from "../components/button";
import googleIcon from "../assets/googleIcon.png";

const LoginRegister = () => {
  const { setIsLogged } = useLoginStore();
  const [register, setRegister] = useState<boolean>(false);
  return (
    <div className="login-register">
      <div className="container">
        <div className="form-container">
          <div className="actions-form">
            <img
              src={pageLogo}
              alt="Page Logo"
              className="actions-form__logo"
            />
            <div className="actions-form__title">
              <MainTitle center={false}>
                {register ? "Sign up" : "Log in"}
              </MainTitle>
              <SubTitle center={false}>
                {register
                  ? "Start your 30-day free trial."
                  : "Welcome back! Please enter your details."}
              </SubTitle>
            </div>
            <div className="inputs">
              {register ? (
                <div className="form-inputs">
                  <p className="form-inputs__label">Name*</p>
                  <input
                    required
                    type="text"
                    className="form-inputs__input"
                    placeholder="Enter your name"
                  />
                </div>
              ) : (
                ""
              )}
              <div className="form-inputs">
                <p className="form-inputs__label">Email{register ? "*" : ""}</p>
                <input
                  required
                  type="email"
                  className="form-inputs__input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-inputs">
                <p className="form-inputs__label">
                  Password{register ? "*" : ""}
                </p>
                <input
                  required
                  type="password"
                  className="form-inputs__input"
                  placeholder={register ? "Create a pasword" : "••••••••"}
                />
              </div>
              <div className="remember">
                {register ? (
                  <p>Must be at least 8 characters</p>
                ) : (
                  <>
                    <div className="remember-me">
                      <input type="checkbox" />
                      <p className="remember-me__label">Remember for 30 days</p>
                    </div>
                    <p className="forgot-pw">Forgot password</p>
                  </>
                )}
              </div>
              <Button onClick={() => setIsLogged(true)} height={3} width="100%">
                {register ? "Get started" : "Sign in"}
              </Button>
              <button className="signup-google">
                {" "}
                <span>
                  <img className="signup-google__img" src={googleIcon} alt="" />
                </span>{" "}
                Sign in with Google
              </button>
              <div className="switch-form">
                <p className="switch-form__text">
                  {register
                    ? "Already have an account?"
                    : "Don’t have an account?"}{" "}
                  <span
                    onClick={() => setRegister(!register)}
                    className="switch-form__text--highlight"
                  >
                    {register ? "Log in" : "Sign up"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-footer">
          <p className="container-footer__copyright">© Untitled UI 2077</p>
        </div>
      </div>
      <img src={register ? registerBg : loginBg} className="background" />
    </div>
  );
};

export default LoginRegister;
