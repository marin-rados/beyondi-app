import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./styles/base.scss";
import HomePage from "./pages/homePage";
import LoginRegister from "./pages/loginRegister";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<LoginRegister />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
