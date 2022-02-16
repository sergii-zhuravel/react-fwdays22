import { getMockContactDetails } from "common/mock-data/contacts.mock";
import { selector } from "recoil";
import { currentContactState } from "store/state/contact-list.state";

export const currentContactDetails = selector({
  key: "currentContactDetails",
  get: async ({ get }) => {
    const response = await getMockContactDetails(get(currentContactState));
    return response;
  },
});
