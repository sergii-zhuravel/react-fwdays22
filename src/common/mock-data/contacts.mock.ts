import {
  generateContacts,
  generateRandomNumber,
} from "common/mock-data/mock.utils";

export interface IMockContact {
  id: number;
  avatar: string;
  name: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

const randomSeed: number = generateRandomNumber(12);
const contacts: Array<IMockContact> = generateContacts(randomSeed);

export const getMockContacts = (): Promise<Array<IMockContact>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts.map((contact: IMockContact) => ({ ...contact })));
    }, 2000);
  });
};

export const getMockContactDetails = (id: number): Promise<IMockContact> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts.filter((contact: IMockContact) => contact.id === id)[0]);
    }, 2000);
  });
