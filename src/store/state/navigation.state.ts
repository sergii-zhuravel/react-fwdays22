import { atom } from "recoil";

export interface INavigationState {
  isChatDrawerOpen: boolean;
}

export const initialNavigationState: INavigationState = {
  isChatDrawerOpen: false,
};

export const navigationState = atom({
  key: "navigationState",
  default: initialNavigationState,
});
