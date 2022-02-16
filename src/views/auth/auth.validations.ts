import {
  TOPIC_UPDATE_REGISTRATION_VIEW,
  TOPIC_UPDATE_VERIFICATION_VIEW,
} from "store/topics/view.topics";
import DefaultSubject from "store/RecoilObserver/DefaultSubject";
import { isNullOrUndefined } from "common/utils/type.utils";
import { IAuthError } from "common/models/app.model";

const strongPasswordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const mediumPasswordRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
);

const validateUsername = (username: string, TOPIC: string): boolean => {
  if (isNullOrUndefined(username) || username === "" || username.length < 6) {
    DefaultSubject.notify(TOPIC, {
      usernameError: true,
    });
    return false;
  }
  return true;
};

const validatePasswordStrength = (password: string, TOPIC: string): boolean => {
  if (!mediumPasswordRegex.test(password)) {
    DefaultSubject.notify(TOPIC, {
      passwordError: true,
    });
    return false;
  }
  return true;
};

const validatePasswordLength = (password: string, TOPIC: string): boolean => {
  if (password.length === 0) {
    DefaultSubject.notify(TOPIC, {
      passwordError: true,
    });
    return false;
  }
  return true;
};

const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (phoneNumber.length < 10) {
    DefaultSubject.notify(TOPIC_UPDATE_REGISTRATION_VIEW, {
      phoneNumberError: true,
    });
    return false;
  }
  return true;
};

const validateVerificationCode = (
  verificationCodes: Array<string>
): boolean => {
  let isValid = true;
  for (let index = 0; index < verificationCodes.length; index++) {
    const element = verificationCodes[index];
    if (isNullOrUndefined(element) || element === "") {
      isValid = false;
      DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
        verificationCodeError: true,
      });
      break;
    }
  }
  return isValid;
};

const dismissErrorMessage = (TOPIC: string): void => {
  DefaultSubject.notify(TOPIC, {
    formError: false,
    authError: {},
  });
};

const displayErrorMessage = (TOPIC: string, error: IAuthError): void => {
  DefaultSubject.notify(TOPIC, {
    formError: true,
    authError: error,
    isFormLoading: false,
  });
};

const displayFormSuccess = (TOPIC: string): void => {
  DefaultSubject.notify(TOPIC, {
    formSuccess: true,
    isFormLoading: false,
  });
};

const AuthValidations = {
  dismissErrorMessage,
  displayErrorMessage,
  displayFormSuccess,
  validatePasswordStrength,
  validatePasswordLength,
  validatePhoneNumber,
  validateUsername,
  validateVerificationCode,
};

export default AuthValidations;
