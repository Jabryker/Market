import {FC} from "react";
import BuyerRegistrationFormOrganism from "../../components/organisms/BuyerRegistrationFormOrganism/BuyerRegistrationFormOrganism";
import AuthController from "../../controllers/AuthController";
import {IRegisterData} from "../../controllers/interfaces/RegisterData.interface";

const BuyerRegistrationPageTemplate: FC = () => {

  const handleBuyerSubmit = (registerData: IRegisterData) => {
    // console.log("Submitted login data:", data);
    AuthController.register(registerData);
  };

  return (
    <div>
      <h2>Buyer Registration Page</h2>
      <BuyerRegistrationFormOrganism onSubmit={handleBuyerSubmit} />
    </div>
  );
};

export default BuyerRegistrationPageTemplate;