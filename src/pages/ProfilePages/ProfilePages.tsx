import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderOrganism } from "../../components/organisms";
import { ProfileTemplate } from "../../templates/";
import {
  ProfileController,
  IUserProfile,
  IUser,
  UserType,
} from "../../controllers/ProfileController";

interface ProfileScreenProps {
  userType: string;
}

export const ProfilePages: FC<ProfileScreenProps> = ({ userType }) => {
  const { id } = useParams<{ id?: string }>();
  const [profileData, setProfileData] = useState<IUserProfile | IUser | null>(
    null
  );

  useEffect(() => {
    if (id) {
      const fetchUserProfile = async () => {
        try {
          const userTypeValue =
            userType === "buyer" ? UserType.Buyer : UserType.Seller;
          const data = await ProfileController.fetchUserProfile(
            userTypeValue,
            id
          );
          setProfileData(data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchUserProfile();
    }
  }, [userType, id]);

  return (
    <div>
      <HeaderOrganism userType={userType} />
      {profileData && <ProfileTemplate userData={profileData} />}
    </div>
  );
};
