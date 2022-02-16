import { atom } from "recoil";

export const exampleViewState = atom({
  key: "exampleViewState",
  default: {
    activeItemName: "",
  },
});
