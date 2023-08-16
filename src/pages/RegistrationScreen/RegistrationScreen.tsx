import { FC } from "react";
import { Link } from "react-router-dom";

const RegistrationScreen: FC = () => {
  return (
    <div>
      <h2>Выберите тип регистрации:</h2>
      <Link to="/registration/buyer">Регистрация как покупатель</Link>
      <Link to="/registration/seller">Регистрация как продавец</Link>
    </div>
  );
};

export default RegistrationScreen;
