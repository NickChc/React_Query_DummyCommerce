export interface TPost {
  title: string;
  id: number | string;
  body: string;
  userId: string | number;
}

export interface TUser {
  id: string | number;
  username: string;
  image: string;
}
