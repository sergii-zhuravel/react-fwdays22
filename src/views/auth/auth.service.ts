import {
  confirmSignUpMock,
  signInMock,
  signUpMock,
} from "common/mock-data/auth.mock";

export enum EAuthErrorTypes {
  INVALID_PARAM = "InvalidParameterException",
  NOT_AUTHORIZED = "NotAuthorizedException",
  USER_NOT_FOUND = "UserNotFoundException",
  USER_EXISTS = "UsernameExistsException",
  AUTH_ERROR = "AuthError",
  TYPE_ERROR = "TypeError",
}

/**
 * signIn
 * @export
 * @param {string} username
 * @param {string} password
 * @returns {Promise<any>}
 */
const signIn = async function (
  username: string,
  password: string
): Promise<any> {
  try {
    return await signInMock(username, password);
  } catch (error) {
    return error;
  }
};

/**
 * signUp
 * @export
 * @param {string} username
 * @param {string} password
 * @param {string} phonenumber
 * @returns {Promise<any>}
 */
const signUp = async function (
  username: string,
  password: string,
  phonenumber: string
): Promise<any> {
  try {
    return await signUpMock({
      username,
      password,
      attributes: {
        phone_number: `+${phonenumber}`,
        birthdate: "",
        gender: "",
      },
    });
  } catch (error) {
    return error;
  }
};

const verify = async function (
  username: string,
  verificationCode: string
): Promise<any> {
  try {
    return await confirmSignUpMock(username, verificationCode);
  } catch (error) {
    return error;
  }
};

const AuthService = {
  signIn,
  signUp,
  verify,
};

export default AuthService;
