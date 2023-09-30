import React from "react";
import { IUser } from "../../../controllers/ProfileController";
interface ProfileShopOrganism {
  userData: IUser;
}
const ProfileShopOrganism: React.FC<ProfileShopOrganism> = ({ userData }) => {
  return <div>ProfileShopOrganism</div>;
};

export default ProfileShopOrganism;
