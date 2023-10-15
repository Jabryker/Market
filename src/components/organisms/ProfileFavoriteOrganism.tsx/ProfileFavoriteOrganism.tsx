import React from "react";
import { IUser } from "../../../controllers/ProfileController";
interface ProfileFavoriteOrganism {
  userData: IUser;
}
const ProfileFavoriteOrganism: React.FC<ProfileFavoriteOrganism> = ({
  userData,
}) => {
  return <div>ProfileFavoriteOrganism</div>;
};

export default ProfileFavoriteOrganism;
