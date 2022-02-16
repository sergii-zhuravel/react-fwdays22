import { atom } from "recoil";

export interface IAuthenticationState {
  isAuthenticated: boolean;
  user: any;
  userRegistered: boolean;
  userVerified: boolean;
}

export const initialAuthenticationState: IAuthenticationState = {
  isAuthenticated: false,
  user: {},
  userRegistered: false,
  userVerified: false,
};

export const authenticationState = atom({
  key: "authState",
  default: initialAuthenticationState,
});
