import { FC } from "react";
import { Descriptions } from "antd";
import { IUserProfile, IUser } from "../../controllers/ProfileController";

interface ProfileTemplateProps {
    userData: IUserProfile | IUser;
}

export const ProfileTemplate: FC<ProfileTemplateProps> = ({ userData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10 text-center">Welcome to profile {userData.username}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <img
            src={userData.photo}
            alt={`${userData.email}`}
            className="max-w-full h-auto mb-4 md:mb-0 md:max-h-100"
          />
        </div>
        <div className="col-span-1">
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
            <Descriptions.Item label="Username">{userData.username}</Descriptions.Item>
            <Descriptions.Item label="Phone Number">{userData.phone_number}</Descriptions.Item>
            <Descriptions.Item label="Birthday">{userData.birthday}</Descriptions.Item>
            <Descriptions.Item label="Job">{userData.job}</Descriptions.Item>
            <Descriptions.Item label="Specialization">{userData.specialization}</Descriptions.Item>
            <Descriptions.Item label="WhatsApp">{userData.whatsapp}</Descriptions.Item>
            <Descriptions.Item label="Telegram">{userData.telegram}</Descriptions.Item>
            <Descriptions.Item label="Address">{userData.address}</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </div>
  );
};
