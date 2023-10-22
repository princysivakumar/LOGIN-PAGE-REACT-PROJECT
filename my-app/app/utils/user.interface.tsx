export interface UserData {
    username: string;
    password: string;
    active_module: string,
    role: string
  }


  export interface User {
    username: string;
    password: string;
    active_module: string;
    role: 'admin'| 'user';
  }