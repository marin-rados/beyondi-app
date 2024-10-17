import HomePage from "../pages/homePage";
import LoginRegister from "../pages/loginRegister";
import { useLoginStore } from "../store/store";

const Layout = () => {
  const { isLogged } = useLoginStore();

  return (
    <div className="layout">
      {isLogged ? (
        <>
          <HomePage />
        </>
      ) : (
        <>
          <LoginRegister />
        </>
      )}
    </div>
  );
};

export default Layout;
