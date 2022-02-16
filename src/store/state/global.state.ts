import { atom } from "recoil";

export const appState = atom({
  key: "appState",
  default: {
    title: "ADHD MY-WAY",
    welcomeMessage: "Welcome to ADHD My-Way",
    inputValue: "",
  },
});
