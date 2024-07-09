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

export interface TComment {
  body: string;
  id: number | string;
  likes: number;
  user: {
    id: string | number;
    username: string;
    fullname: string;
  };
}
