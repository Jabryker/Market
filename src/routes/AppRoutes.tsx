import { useRoutes } from "react-router-dom";
import MainPage from "../pages/MainScreen/MainPage";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import RegistrationScreen from "../pages/RegistrationScreen/RegistrationScreen";
import BuyerRegistrationPageTemplate from "../templates/BuyerRegistrationPageTemplate/BuyerRegistrationPageTemplate";
import SellerRegistrationPageTemplates from "../templates/SellerRegistrationPageTemplates/SellerRegistrationPageTemplates";
import PasswordConfirmationScreen from "../pages/PasswordConfirmationScreen/PasswordConfirmationScreen";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import NotFoundScreen from "../pages/NotFoundScreen/NotFoundScreen";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/registration",
      element: <RegistrationScreen />,
    },
    {
      path: "/registration/buyer",
      element: <BuyerRegistrationPageTemplate />,
    },
    {
      path: "/registration/seller",
      element: <SellerRegistrationPageTemplates />,
    },
    {
      path: "/confirmation-password",
      element: <PasswordConfirmationScreen />,
    },
    {
      path: "/password-reset",
      element: <PasswordReset />,
    },
    {
      path: "*",
      element: <NotFoundScreen />,
    },
  ]);

  return routes;
};

export default AppRoutes;
