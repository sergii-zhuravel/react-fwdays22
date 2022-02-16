import { navigate } from "@reach/router";
import {
  CenteredPageHeader,
  CTALink,
  HorizontalDivider,
} from "common/styles/common.styles";
import APP_BUTTON from "components/button/Button.component";
import APP_CARD from "components/card/Card.component";
import APP_CONTAINER from "components/container/Container.component";
import * as React from "react";
import { ChangeEvent, FormEvent } from "react";
import { useRecoilValue } from "recoil";
import { Form, Grid, Input, Message } from "semantic-ui-react";
import { DefaultSubject } from "store/RecoilObserver/DefaultSubject";
import { authenticationState } from "store/state/authentication.state";
import { ILoginViewState, loginViewState } from "store/state/login-view.state";
import { TOPIC_UPDATE_AUTH_STATE } from "store/topics/authentication.topics";
import { TOPIC_UPDATE_LOGIN_VIEW } from "store/topics/view.topics";
import AuthService, { EAuthErrorTypes } from "views/auth/auth.service";
import AuthValidations from "views/auth/auth.validations";
import { DefaultLoginViewProps, ILoginViewProps } from "./login.types";

const onUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_LOGIN_VIEW, {
    username: value,
    usernameError: false,
  });
};

const onPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
  const { value } = event.currentTarget;
  DefaultSubject.notify(TOPIC_UPDATE_LOGIN_VIEW, {
    password: value,
    passwordError: false,
  });
};

const onFormSubmit = (
  event: FormEvent<HTMLFormElement>,
  viewState: ILoginViewState
): void => {
  event.preventDefault();
  const { username, password } = viewState;

  // Set In progress
  DefaultSubject.notify(TOPIC_UPDATE_LOGIN_VIEW, {
    isFormLoading: true,
  });

  if (
    AuthValidations.validateUsername(username, TOPIC_UPDATE_LOGIN_VIEW) &&
    AuthValidations.validatePasswordLength(password, TOPIC_UPDATE_LOGIN_VIEW)
  ) {
    AuthService.signIn(username, password).then((response) => {
      if (Object.values(EAuthErrorTypes).includes(response.name)) {
        window.sessionStorage.clear();
        AuthValidations.displayErrorMessage(TOPIC_UPDATE_LOGIN_VIEW, response);
        DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
          isAuthenticated: false,
          user: null,
        });
      } else {
        window.sessionStorage.setItem("MW_USER", JSON.stringify(response));
        AuthValidations.displayFormSuccess(TOPIC_UPDATE_LOGIN_VIEW);
        DefaultSubject.notify(TOPIC_UPDATE_AUTH_STATE, {
          isAuthenticated: true,
          user: JSON.parse(window.sessionStorage.getItem("MW_USER") as string),
        });
      }
    });
  }
};

const LoginView: React.FC<ILoginViewProps> = (props: ILoginViewProps) => {
  const viewState = useRecoilValue(loginViewState);
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
          <Form.Field
            id="loginUsername"
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
            id="loginPassword"
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
          <APP_BUTTON type="submit" style={{ width: "100%" }}>
            Submit
          </APP_BUTTON>
        </Form>
        <HorizontalDivider horizontal>
          <span>Or</span>
        </HorizontalDivider>

        <Grid columns={2} stackable>
          <Grid.Column
            verticalAlign="middle"
            textAlign="center"
            style={{ borderRight: "1px solid #CBCCCE", padding: "8px" }}
          >
            <CTALink to="/registration">Register Now</CTALink>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" textAlign="center">
            <CTALink to="/forgot-password">Forgot Password?</CTALink>
          </Grid.Column>
        </Grid>
      </APP_CARD>
      <Message
        error
        visible={viewState.formError}
        hidden={!viewState.formError}
        onDismiss={(): void =>
          AuthValidations.dismissErrorMessage(TOPIC_UPDATE_LOGIN_VIEW)
        }
        header="Login Failed"
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
        visible={viewState.passwordError}
        hidden={!viewState.passwordError}
        header="Password Required"
        content="You must provide a password."
      />
      <Message
        success
        visible={viewState.formSuccess}
        hidden={!viewState.formSuccess}
        header="Success!"
        content="Login successful. Redirecting to your dashboard..."
      />
    </APP_CONTAINER>
  );
};

LoginView.defaultProps = DefaultLoginViewProps;
export default LoginView;
