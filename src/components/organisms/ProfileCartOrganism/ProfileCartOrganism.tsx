import React from "react";
import { IUser } from "../../../controllers/ProfileController";
interface ProfileCartOrganism {
  userData: IUser;
}
const ProfileCartOrganism: React.FC<ProfileCartOrganism> = ({ userData }) => {
  return <div>ProfileCartOrganism</div>;
};

export default ProfileCartOrganism;
