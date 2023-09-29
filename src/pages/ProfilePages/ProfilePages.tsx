import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IUser,
  IUserProfile,
  ProfileController,
  UserType,
} from "../../controllers/ProfileController";
import { ProfileTemplate } from "../../templates/";

interface ProfileScreenProps {
  userType: string; // Add userType prop to the interface
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
      {profileData && <ProfileTemplate userData={profileData} />}
    </div>
  );
};
