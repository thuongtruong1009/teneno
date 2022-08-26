export type GetAllPublicUsersDto = {
  current: number;
  limit?: number;
  order?: number;
};

export type GetUserProfileDto = {
  email: string;
  username: string;
};

export type DeleteUserProfile = {
  email: string;
  password: string;
};
