import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import BuyerRegistrationPageTemplate from "./templates/BuyerRegistrationPageTemplate/BuyerRegistrationPageTemplate";
import SellerRegistrationPageTemplates
  from "./templates/SellerRegistrationPageTemplates/SellerRegistrationPageTemplates";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen /> } />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/registration/buyer" element={<BuyerRegistrationPageTemplate />} />
        <Route path="/registration/seller" element={<SellerRegistrationPageTemplates />} />
      </Routes>
    </>
  );
};

export default App;
