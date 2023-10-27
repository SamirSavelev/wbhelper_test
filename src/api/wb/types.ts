export interface LoginResponseInterface {
  refresh: string;
  access: string;
  is_email_confirmed: boolean;
}

export interface LoginRequestInterface {
  email: string;
  password: string;
}
