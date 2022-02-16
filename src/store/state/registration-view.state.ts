import { atom } from "recoil";
import { IAuthError } from "common/models/app.model";

export interface IRegistrationViewState {
  isFormLoading: boolean;
  formError: boolean;
  formSuccess: boolean;
  username: string;
  password: string;
  phoneNumber: string;
  usernameError: boolean;
  passwordError: boolean;
  phoneNumberError: boolean;
  isPasswordMedium: boolean;
  isPasswordStrong: boolean;
  authError: IAuthError;
}

export const initialRegistrationState: IRegistrationViewState = {
  isFormLoading: false,
  formError: false,
  formSuccess: false,
  username: "",
  password: "",
  phoneNumber: "",
  usernameError: false,
  passwordError: false,
  phoneNumberError: false,
  isPasswordMedium: false,
  isPasswordStrong: false,
  authError: {} as IAuthError,
};

export const registrationViewState = atom({
  key: "registrationViewState",
  default: initialRegistrationState,
});
