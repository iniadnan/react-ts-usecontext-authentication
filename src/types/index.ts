export interface IRouterError {
  statusText?: string;
  message?: string;
}

export interface IThemes {
  darkMode: boolean;
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}