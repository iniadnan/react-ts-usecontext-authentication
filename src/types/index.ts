export interface IRouterError {
  statusText?: string;
  message?: string;
}

export interface IThemes {
  darkMode: boolean;
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
