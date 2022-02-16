export const signInMock = (username, password): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export const signUpMock = (data: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export const confirmSignUpMock = (username, code): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

// export const getMockContacts = (): Promise<Array<IMockContact>> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(contacts.map((contact: IMockContact) => ({ ...contact })));
//     }, 2000);
//   });
// };

// export const getMockContactDetails = (id: number): Promise<IMockContact> =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(contacts.filter((contact: IMockContact) => contact.id === id)[0]);
//     }, 2000);
//   });
