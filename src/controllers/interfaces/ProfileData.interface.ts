export interface IProfileData {
  userId: number;
  userRole: string;
  token: string;
}

export interface IProfileDataUpdate extends IProfileData {
  profileData: any;
}
