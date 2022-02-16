import { atom } from "recoil";

export const contactList = atom({
  key: "contactList",
  default: [],
});

export const currentContactState = atom({
  key: "currentContactState",
  default: 1,
});
