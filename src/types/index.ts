export interface IRouterError {
  statusText?: string;
  message?: string;
}

export interface IThemes {
  darkMode: boolean;
  toggleTheme: () => void;
}
