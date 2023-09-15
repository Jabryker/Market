import { Navigate, useRoutes } from "react-router-dom";

import {
  MainPage,
  LoginScreen,
  RegistrationScreen,
  PasswordConfirmationScreen,
  PasswordReset,
  NotFoundScreen,
  ProductDetailsScreen,
  BasketPages,
  ProfilePages,
  ProductPages,
} from "../pages";

import {
  BuyerRegistrationPageTemplate,
  SellerRegistrationPageTemplates,
  NewsDetailsTemplate,
  UsefulArticlesDetailTemplate,
} from "../templates/";

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
      path: "/product",
      element: <ProductPages />,
    },
    {
      path: "/products/:id",
      element: <ProductDetailsScreen />,
    },
    {
      path: "/news/:id",
      element: <NewsDetailsTemplate />,
    },
    {
      path: "/articles/:id",
      element: <UsefulArticlesDetailTemplate />,
    },
    {
      path: "/cart",
      element: <BasketPages />,
    },
    {
      path: "/profile/buyer/:id",
      element: <ProfilePages userType="buyer" />,
    },
    {
      path: "/profile/seller/:id",
      element: <ProfilePages userType="seller" />,
    },
    {
      path: "404",
      element: <NotFoundScreen />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);

  return routes;
};

export default AppRoutes;
