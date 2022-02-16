import { atom } from "recoil";
import { IAuthError } from "common/models/app.model";

export interface ILoginViewState {
  isFormLoading: boolean;
  formError: boolean;
  formSuccess: boolean;
  username: string;
  password: string;
  usernameError: boolean;
  passwordError: boolean;
  isPasswordMedium: boolean;
  isPasswordStrong: boolean;
  authError: IAuthError;
}

export const initialLoginState: ILoginViewState = {
  isFormLoading: false,
  formError: false,
  formSuccess: false,
  username: "username",
  password: "password",
  usernameError: false,
  passwordError: false,
  isPasswordMedium: false,
  isPasswordStrong: false,
  authError: {} as IAuthError,
};

export const loginViewState = atom({
  key: "loginViewState",
  default: initialLoginState,
});
