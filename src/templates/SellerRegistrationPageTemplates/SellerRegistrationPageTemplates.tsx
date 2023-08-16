import {FC} from "react";
import SellerRegistrationFormOrganism from "../../components/organisms/SellerRegistrationFormOrganism/SellerRegistrationFormOrganism";
import {ISellerData} from "../../controllers/interfaces/SellerData.interface";
import AuthController from "../../controllers/AuthController";

const SellerRegistrationPageTemplates: FC = () => {

  const handleSellerSubmit = (sellerData: ISellerData) => {
    // console.log("Submitted login data:", sellerData);
    AuthController.seller(sellerData);
  };

  return (
    <div>
      <h2>Seller Registration Page</h2>
      <SellerRegistrationFormOrganism onSubmit={handleSellerSubmit} />
    </div>
  );
};

export default SellerRegistrationPageTemplates;