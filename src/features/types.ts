export interface AuthInitialStateInterface {
  refresh: string | null;
  access: string | null;
  is_email_confirmed: boolean | null;
}

export interface ArrayItem {
  id: number;
  name: string;
}
