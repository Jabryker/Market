import { Navigate, useRoutes } from "react-router-dom";
import {
  BasketPages,
  LoginScreen,
  MainPage,
  NotFoundScreen,
  PasswordConfirmationScreen,
  PasswordReset,
  ProductDetailsScreen,
  ProductPages,
  ProfilePages,
  RegistrationScreen,
} from "../pages";

import {
  BuyerRegistrationPageTemplate,
  NewsDetailsTemplate,
  SellerRegistrationPageTemplates,
  UsefulArticlesDetailTemplate,
} from "../templates/";

const getUserTypeFromLocalStorage = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    try {
      const userInfoObject = JSON.parse(userInfo);
      if (userInfoObject && userInfoObject.role) {
        return userInfoObject.role;
      }
    } catch (error) {
      console.error("Error parsing userInfo from localStorage", error);
    }
  }
  // Default to "buyer" if no valid userType is found in localStorage
  return "buyer";
};

const AppRoutes = () => {
  const userType = getUserTypeFromLocalStorage();

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
      element: <ProfilePages userType={userType} />,
    },
    {
      path: "/profile/seller/:id",
      element: <ProfilePages userType={userType} />,
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
