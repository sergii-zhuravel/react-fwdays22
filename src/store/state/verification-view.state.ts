import { IAuthError } from "common/models/app.model";
import { atom } from "recoil";

export interface IVerificationViewState {
  isFormLoading: boolean;
  formError: boolean;
  formSuccess: boolean;
  username: string;
  password: string;
  verificationCode: string;
  verificationCodeValue1: string;
  verificationCodeValue2: string;
  verificationCodeValue3: string;
  verificationCodeValue4: string;
  verificationCodeValue5: string;
  verificationCodeValue6: string;
  usernameError: boolean;
  passwordError: boolean;
  verificationCodeError: boolean;
  authError: IAuthError;
}

export const initialVerificationState: IVerificationViewState = {
  isFormLoading: false,
  formError: false,
  formSuccess: false,
  username: "",
  password: "",
  verificationCode: "",
  verificationCodeValue1: "",
  verificationCodeValue2: "",
  verificationCodeValue3: "",
  verificationCodeValue4: "",
  verificationCodeValue5: "",
  verificationCodeValue6: "",
  usernameError: false,
  passwordError: false,
  verificationCodeError: false,
  authError: {} as IAuthError,
};

export const verificationViewState = atom({
  key: "verificationViewState",
  default: initialVerificationState,
});
