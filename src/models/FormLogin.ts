export interface FormLogin {
  email: string;
  password: string;
}

export interface ResponseLogin {
  user: object;
  access_token: string;
  refresh_token: string;
}
