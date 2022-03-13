export interface UserInfor{
  id_user:       number;
  name_user:     string;
  lastname_user: string;
  email_user:    string;
  password_user: string;
  img_user:      string;
}

export interface SearchUser{
  email:    string;
  password: string;
}

export interface responseAuth{
  msg: string,
  state: string,
  user?: UserInfor
}
