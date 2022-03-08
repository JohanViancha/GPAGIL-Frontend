export interface AddUser {
  id_user:       number;
  name_user:     string;
  lastname_user: string;
  email_user:    string;
  password_user: string;
  img_user:      string;
}

export interface SearchUser{
  email_user:    string;
  password_user: string;
}
