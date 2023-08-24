import { useRoutes } from "react-router-dom";

import {
  MainPage,
  LoginScreen,
  RegistrationScreen,
  PasswordConfirmationScreen,
  PasswordReset,
  NotFoundScreen,
  ProductDetailsScreen,
} from "../pages";

import { BuyerRegistrationPageTemplate, SellerRegistrationPageTemplates } from "../templates/";

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
      path: "/products/:productId",
      element: <ProductDetailsScreen />,
    },
    {
      path: "*",
      element: <NotFoundScreen />,
    },
  ]);

  return routes;
};

export default AppRoutes;
