import * as React from "react";
import { useSetRecoilState } from "recoil";
import { authenticationState } from "store/state/authentication.state";
import {
  contactList,
  currentContactState,
} from "store/state/contact-list.state";
import { TOPIC_GET_APP_STATE } from "store/topics/global.topics";
import { appState } from "store/state/global.state";
import { TOPIC_UPDATE_AUTH_STATE } from "store/topics/authentication.topics";
import {
  TOPIC_GET_CONTACT_LIST,
  TOPIC_GET_CONTACT_DETAIL,
} from "store/topics/contact-list.topics";
import { loginViewState } from "store/state/login-view.state";
import { DefaultSubject } from "store/RecoilObserver/DefaultSubject";
import {
  TOPIC_UPDATE_LOGIN_VIEW,
  TOPIC_UPDATE_REGISTRATION_VIEW,
  TOPIC_UPDATE_VERIFICATION_VIEW,
} from "store/topics/view.topics";
import { registrationViewState } from "store/state/registration-view.state";
import { verificationViewState } from "store/state/verification-view.state";
import { useRecoilValue } from "recoil";
import { TOPIC_UPDATE_NAV_STATE } from "store/topics/navigation.topics";
import { navigationState } from "store/state/navigation.state";

export const RecoilObserver = (): null => {
  // @todo Automate this process
  const setContactList = {
    topic: TOPIC_GET_CONTACT_LIST,
    state: useRecoilValue(contactList),
    cb: useSetRecoilState(contactList),
  };

  const setContactDetail = {
    topic: TOPIC_GET_CONTACT_DETAIL,
    state: useRecoilValue(currentContactState),
    cb: useSetRecoilState(currentContactState),
  };

  const setApplicationState = {
    topic: TOPIC_GET_APP_STATE,
    state: useRecoilValue(appState),
    cb: useSetRecoilState(appState),
  };

  const setNavigationState = {
    topic: TOPIC_UPDATE_NAV_STATE,
    state: useRecoilValue(navigationState),
    cb: useSetRecoilState(navigationState),
  };

  const setAuthenticationState = {
    topic: TOPIC_UPDATE_AUTH_STATE,
    state: useRecoilValue(authenticationState),
    cb: useSetRecoilState(authenticationState),
  };

  const setLoginViewState = {
    topic: TOPIC_UPDATE_LOGIN_VIEW,
    state: useRecoilValue(loginViewState),
    cb: useSetRecoilState(loginViewState),
  };

  const setRegistrationViewState = {
    topic: TOPIC_UPDATE_REGISTRATION_VIEW,
    state: useRecoilValue(registrationViewState),
    cb: useSetRecoilState(registrationViewState),
  };

  const setVerificationViewState = {
    topic: TOPIC_UPDATE_VERIFICATION_VIEW,
    state: useRecoilValue(verificationViewState),
    cb: useSetRecoilState(verificationViewState),
  };

  const observers = [
    setApplicationState,
    setAuthenticationState,
    setNavigationState,
    setContactList,
    setContactDetail,
    setLoginViewState,
    setRegistrationViewState,
    setVerificationViewState,
  ];

  React.useEffect(() => {
    observers.forEach((observer) => {
      DefaultSubject.attach(observer);
    });
    return (): void => {
      observers.forEach((observer) => {
        DefaultSubject.detach(observer);
      });
    };
  }, [observers]);

  return null;
};

export default RecoilObserver;
