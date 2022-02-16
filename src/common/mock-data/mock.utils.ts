import { IMockContact } from "common/mock-data/contacts.mock";
import faker from "faker";

/**
 * @name getEmptyArray
 * @description Returns an array of empty strings. Typically used
 * as an iterator for generating data. Number of elements in array
 * is specified by the size parameter. If no size is set, it defaults to 1.
 *
 * @param {number} size
 * @returns {string[]}
 */
export const getEmptyArray = (size = 1): Array<string> => {
  const arr: Array<string> = [];
  while (size) {
    arr.push("");
    size--;
  }
  return arr;
};

/**
 * @name generateContacts
 * @param {number} size
 * @returns {IMockContact[]}
 */
export const generateContacts = (size: number): Array<IMockContact> => {
  return getEmptyArray(size).map((item, index) => {
    return {
      id: index + 1,
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      title: faker.name.jobTitle(),
      description: faker.lorem.text(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumberFormat(),
      email: faker.internet.exampleEmail(),
    };
  });
};

/**
 * @name generateRandomNumber
 * @param {number} upperBound
 * @returns {number}
 */
export const generateRandomNumber = (upperBound: number): number =>
  Math.round(Math.random() * upperBound);
