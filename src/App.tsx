import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import "./styles/base.scss";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
