export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface Items {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface UserList {
  count: number;
  items: Items[];
}