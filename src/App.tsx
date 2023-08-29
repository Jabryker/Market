import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <AppRoutes />
    </>
  );
};

export default App;
