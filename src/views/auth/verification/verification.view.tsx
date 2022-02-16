import { navigate } from "@reach/router";
import { CenteredPageHeader, CTALink } from "common/styles/common.styles";
import APP_BUTTON from "components/button/Button.component";
import APP_CARD from "components/card/Card.component";
import APP_CONTAINER from "components/container/Container.component";
import * as React from "react";
import { ChangeEvent, FormEvent, ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { Form, Grid, Input, Message } from "semantic-ui-react";
import DefaultSubject from "store/RecoilObserver/DefaultSubject";
import { authenticationState } from "store/state/authentication.state";
import {
  IRegistrationViewState,
  registrationViewState,
} from "store/state/registration-view.state";
import {
  IVerificationViewState,
  verificationViewState,
} from "store/state/verification-view.state";
import { TOPIC_UPDATE_AUTH_STATE } from "store/topics/authentication.topics";
import { TOPIC_UPDATE_VERIFICATION_VIEW } from "store/topics/view.topics";
import AuthService, { EAuthErrorTypes } from "views/auth/auth.service";
import AuthValidations from "views/auth/auth.validations";
import {
  StyledPromptMessage,
  StyledVerificationInput,
} from "views/auth/verification/verification.styles";
import {
  DefaultVerificationViewProps,
  IVerificationViewProps,
} from "views/auth/verification/verification.types";

const onFormSubmit = (
  event: FormEvent<HTMLFormElement>,
  viewState: IVerificationViewState
): void => {
  const { username, password } = viewState;

  event.preventDefault();
  DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
    isFormLoading: true,
  });

  if (
    AuthValidations.validateUsername(
      username,
      TOPIC_UPDATE_VERIFICATION_VIEW
    ) &&
    AuthValidations.validatePasswordLength(
      password,
      TOPIC_UPDATE_VERIFICATION_VIEW
    )
  ) {
    const verificationCodeValues = [
      viewState.verificationCodeValue1,
      viewState.verificationCodeValue2,
      viewState.verificationCodeValue3,
      viewState.verificationCodeValue4,
      viewState.verificationCodeValue5,
      viewState.verificationCodeValue6,
    ];

    if (AuthValidations.validateVerificationCode(verificationCodeValues)) {
      const verificationCode = verificationCodeValues
        .map((element: string) => {
          return element;
        })
        .join("");

      AuthService.verify(username, verificationCode).then((response) => {
        if (Object.values(EAuthErrorTypes).includes(response.name)) {
          AuthValidations.displayErrorMessage(
            TOPIC_UPDATE_AUTH_STATE,
            response
          );
        } else {
          // Set userVerified
          DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
            userVerified: true,
          });

          // Sign user in
          AuthService.signIn(username, password).then((response) => {
            if (Object.values(EAuthErrorTypes).includes(response.name)) {
              window.sessionStorage.clear();
              AuthValidations.displayErrorMessage(
                TOPIC_UPDATE_VERIFICATION_VIEW,
                response
              );
              DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
                isAuthenticated: false,
                user: null,
              });
            } else {
              window.sessionStorage.setItem(
                "MW_USER",
                JSON.stringify(response)
              );
              DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
                isAuthenticated: true,
                user: JSON.parse(
                  window.sessionStorage.getItem("MW_USER") as string
                ),
              });
            }
          });
        }
      });
    }
  }
};

const renderPhoneNumber = (
  registrationState: IRegistrationViewState
): ReactElement | null => {
  const { phoneNumber } = registrationState;
  if (phoneNumber && phoneNumber.length) {
    const lastFour = phoneNumber.slice(
      phoneNumber.length - 4,
      phoneNumber.length
    );
    const formattedPhoneNumber = `(***) ***-${lastFour}`;
    return <span> to {formattedPhoneNumber}</span>;
  }

  return null;
};

const onUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
  event.preventDefault();
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
    username: value,
    usernameError: false,
  });
};

const onPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
  event.preventDefault();
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
    password: value,
    passwordError: false,
  });
};

const onVerificationInputChange = (
  event: ChangeEvent<HTMLInputElement>
): void => {
  event.preventDefault();
  const { id } = event.currentTarget;
  let { value } = event.currentTarget;

  // Acounting for maxLength bug..
  // Resets value to last typed value.
  if (value.length > 1) {
    value = value.slice(value.length - 1, value.length);
  }

  DefaultSubject.notify(TOPIC_UPDATE_VERIFICATION_VIEW, {
    [id]: value,
    verificationCodeError: false,
  });
};

const VerificationView: React.FC<IVerificationViewProps> = (
  props: IVerificationViewProps
) => {
  const viewState = useRecoilValue(verificationViewState);
  const registrationState = useRecoilValue(registrationViewState);
  const authState = useRecoilValue(authenticationState);

  if (authState.isAuthenticated) {
    navigate("/dashboard");
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
          {viewState.username.length === 0 && (
            <Form.Field
              id="verificationUsername"
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
            />
          )}
          {viewState.password.length === 0 && (
            <Form.Field
              id="verificationPassword"
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
            />
          )}
          <StyledPromptMessage
            className="prompt-message"
            style={{ marginTop: 22 }}
          >
            Enter the code that was sent via text message
            {renderPhoneNumber(registrationState)}
          </StyledPromptMessage>
          <Grid columns="equal" style={{ marginBottom: 30 }}>
            <Grid.Row columns={6}>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue1"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue1}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue2"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue2}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue3"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue3}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue4"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue4}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue5"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue5}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <StyledVerificationInput
                  id="verificationCodeValue6"
                  className="verification-input"
                  type="number"
                  step="1"
                  value={viewState.verificationCodeValue6}
                  error={viewState.verificationCodeError}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void =>
                    onVerificationInputChange(event)
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <APP_BUTTON type="submit" style={{ width: "100%" }}>
            Submit
          </APP_BUTTON>
        </Form>
        <CTALink to="/resend-verification">Resend Code</CTALink>
      </APP_CARD>
      <Message
        error
        onDismiss={(): void =>
          AuthValidations.dismissErrorMessage(TOPIC_UPDATE_VERIFICATION_VIEW)
        }
        visible={viewState.formError}
        hidden={!viewState.formError}
        header="Registration Failed"
        content={viewState.authError.message}
      />
      <Message
        error
        visible={viewState.verificationCodeError}
        hidden={!viewState.verificationCodeError}
        header="Verification Code Required"
        content="Must be six numbers."
      />
    </APP_CONTAINER>
  );
};

VerificationView.defaultProps = DefaultVerificationViewProps;
export default VerificationView;
