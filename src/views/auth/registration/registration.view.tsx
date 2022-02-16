import * as React from "react";
import { ChangeEvent, FormEvent } from "react";
import { useRecoilValue } from "recoil";
import { Form, Input, Message } from "semantic-ui-react";
import PhoneInput from "react-phone-input-2";
import APP_BUTTON from "components/button/Button.component";
import APP_CONTAINER from "components/container/Container.component";
import APP_CARD from "components/card/Card.component";
import {
  CenteredPageHeader,
  HorizontalDivider,
  CTALink,
} from "common/styles/common.styles";
import {
  IRegistrationViewProps,
  DefaultRegistrationViewProps,
} from "./registration.types";
import AuthService, { EAuthErrorTypes } from "../auth.service";
import {
  registrationViewState,
  IRegistrationViewState,
} from "store/state/registration-view.state";
import DefaultSubject from "store/RecoilObserver/DefaultSubject";
import { TOPIC_UPDATE_AUTH_STATE } from "store/topics/authentication.topics";
import {
  TOPIC_UPDATE_REGISTRATION_VIEW,
  TOPIC_UPDATE_VERIFICATION_VIEW,
} from "store/topics/view.topics";
import { navigate } from "@reach/router";
import AuthValidations from "views/auth/auth.validations";
import { authenticationState } from "store/state/authentication.state";

const onFormSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  viewState: IRegistrationViewState
): void => {
  event.preventDefault();
  const { username, password, phoneNumber } = viewState;
  const updateTopic = TOPIC_UPDATE_REGISTRATION_VIEW;
  const authTopic = TOPIC_UPDATE_AUTH_STATE;

  // Set In progress
  DefaultSubject.notify(TOPIC_UPDATE_REGISTRATION_VIEW, {
    isFormLoading: true,
  });

  if (
    AuthValidations.validateUsername(username, updateTopic) &&
    AuthValidations.validatePasswordStrength(password, updateTopic) &&
    AuthValidations.validatePhoneNumber(phoneNumber)
  ) {
    AuthService.signUp(username, password, phoneNumber).then((response) => {
      if (Object.values(EAuthErrorTypes).includes(response.name)) {
        AuthValidations.displayErrorMessage(TOPIC_UPDATE_AUTH_STATE, response);
      } else {
        DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
          userRegistered: true,
          user: {
            username: response.user.username,
            signInUserSession: response.user.signInUserSession,
          },
        });

        AuthValidations.displayFormSuccess(updateTopic);
      }
    });
  }
};

const onUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
  event.preventDefault();
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_REGISTRATION_VIEW, {
    username: value,
    usernameError: false,
  });
};

const onPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
  event.preventDefault();
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_REGISTRATION_VIEW, {
    password: value,
    passwordError: false,
  });
};

const onPhoneNumberChange = (
  value: string,
  event: ChangeEvent<HTMLInputElement>
): void => {
  event.preventDefault();
  DefaultSubject.notify(TOPIC_UPDATE_REGISTRATION_VIEW, {
    phoneNumber: value,
    phoneNumberError: false,
  });
};

const RegistrationView: React.FC<IRegistrationViewProps> = (
  props: IRegistrationViewProps
) => {
  const viewState = useRecoilValue(registrationViewState);
  const { userRegistered, isAuthenticated } =
    useRecoilValue(authenticationState);
  const { username, password } = viewState;

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  if (userRegistered) {
    DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
      username,
      password,
    });
    navigate("/verification");
  }

  return (
    <APP_CONTAINER className="medium">
      <APP_CARD className="auth-card">
        <CenteredPageHeader as="h1">{props.pageTitle}</CenteredPageHeader>
        <Form
          autoComplete="off"
          size="large"
          loading={viewState.isFormLoading}
          onSubmit={(event: FormEvent<HTMLFormElement>): void =>
            onFormSubmit(event, viewState)
          }
        >
          <Form.Field
            id="registerUsername"
            placeholder="Username"
            label="Username"
            name="User Name"
            type="text"
            control={Input}
            value={viewState.username}
            onChange={(event: ChangeEvent<HTMLInputElement>): void =>
              onUsernameChange(event)
            }
            error={viewState.usernameError}
          ></Form.Field>
          <Form.Field
            id="registerPassword"
            placeholder="Password"
            label="Password"
            name="Password"
            type="password"
            control={Input}
            value={viewState.password}
            onChange={(event: ChangeEvent<HTMLInputElement>): void =>
              onPasswordChange(event)
            }
            error={viewState.passwordError}
          ></Form.Field>
          <Form.Field
            id="registerPhonenumber"
            error={viewState.phoneNumberError}
          >
            <label>Phone Number</label>
            <PhoneInput
              country={"us"}
              inputProps={{
                id: "reqisterPhoneNumber",
                name: "Phone Number",
                required: true,
              }}
              value={viewState.phoneNumber}
              onChange={(
                value: string,
                data: any,
                event: ChangeEvent<HTMLInputElement>
              ): void => {
                onPhoneNumberChange(value, event);
              }}
            />
          </Form.Field>
          <APP_BUTTON
            type="submit"
            style={{ width: "100%" }}
            disabled={
              viewState.usernameError ||
              viewState.passwordError ||
              viewState.phoneNumberError
            }
          >
            SUBMIT
          </APP_BUTTON>
        </Form>
        <HorizontalDivider horizontal>
          <span>or</span>
        </HorizontalDivider>
        <CTALink to="/">Sign In</CTALink>
      </APP_CARD>

      <Message
        error
        onDismiss={(): void =>
          AuthValidations.dismissErrorMessage(TOPIC_UPDATE_REGISTRATION_VIEW)
        }
        visible={viewState.formError}
        hidden={!viewState.formError}
        header="Registration Failed"
        content={viewState.authError.message}
      />
      <Message
        error
        visible={viewState.usernameError}
        hidden={!viewState.usernameError}
        header="Username Required"
        content="Must be six characters or longer."
      />
      <Message
        error
        hidden={!viewState.passwordError}
        visible={viewState.passwordError}
        header="Password Required"
        list={[
          "Must contain at least 1 lowercase character.",
          "Must contain at least 1 uppercase character.",
          "Must contain at least 1 numeric character.",
          "Must be eight characters or longer.",
        ]}
      />
      <Message
        error
        hidden={!viewState.phoneNumberError}
        visible={viewState.phoneNumberError}
        header="Phone Number Required"
        content="Must contain ten numeric characters"
      />
    </APP_CONTAINER>
  );
};

RegistrationView.defaultProps = DefaultRegistrationViewProps;
export default RegistrationView;
