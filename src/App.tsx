import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainScreen/MainPage";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegistrationScreen from "./pages/RegistrationScreen/RegistrationScreen";
import BuyerRegistrationPageTemplate from "./templates/BuyerRegistrationPageTemplate/BuyerRegistrationPageTemplate";
import SellerRegistrationPageTemplates from "./templates/SellerRegistrationPageTemplates/SellerRegistrationPageTemplates";
import PasswordConfirmationScreen from "./pages/PasswordConfirmationScreen/PasswordConfirmationScreen";
import NotFoundScreen from "./pages/NotFoundScreen/NotFoundScreen";
import PasswordReset from "./pages/PasswordReset/PasswordReset";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
        <Route path="/registration/buyer" element={<BuyerRegistrationPageTemplate />} />
        <Route path="/registration/seller" element={<SellerRegistrationPageTemplates />} />
        <Route path="/confirmation-password" element={<PasswordConfirmationScreen />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        {/*<Route path="/confirmation-password/:id/:token" element={<PasswordConfirmationScreen />} />*/}
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default App;
