import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./Styles/Global";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Home />
      <GlobalStyle />

      <ToastContainer />
    </>
  );
};

export default App;
