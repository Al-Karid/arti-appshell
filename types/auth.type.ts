// Types for userPermissions object in useAuth.ts
export interface Employee {
  matricule: string;
  username: string;
  fullname: string;
  department: string;
  position: string;
  email: string;
  initials: string;
  photo_url: string | null;
  manager: string;
  is_away: boolean;
  interim_user: string;
  is_internal: boolean;
  is_director: boolean;
  gender: string;
  category: string;
}

export interface Login {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface User {
  username: string;
  email: string;
  fullname: string;
  department: string;
  initials: string;
}

export interface Role {
  roles: string[];
  resources: string[];
  actions: string[];
  appName: string;
}

export interface UserPermissions {
  user: User;
  roles: Role[];
}
