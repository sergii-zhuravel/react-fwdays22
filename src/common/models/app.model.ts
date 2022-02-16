export interface IAppState {
  title: string;
  welcomeMessage: string;
  inputValue: string;
}

export interface IAuthError {
  code: string;
  message: string;
  name: string;
}
