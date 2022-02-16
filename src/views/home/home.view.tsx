import React, { MouseEvent } from "react";
import { DefaultHomeViewProps, IHomeProps } from "views/home/home.interface";
import { Form, Input, Header } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from "recoil";
import MW_BUTTON from "components/button/Button.component";
import { Link, redirectTo } from "@reach/router";
import { appState } from "store/state/global.state";
import { authenticationState } from "store/state/authentication.state";

const onTestChange = (event: MouseEvent<HTMLElement>): void => {
  alert(`Button Clicked: ${{ ...event }}`);
};

const HomeView: React.FC<IHomeProps> = ({ pageTitle }: IHomeProps) => {
  const [appStateObj, setAppState] = useRecoilState(appState);
  const { inputValue } = useRecoilValue(appState);
  const { isAuthenticated } = useRecoilValue(authenticationState);

  // if (!isAuthenticated) {
  //   redirectTo("/login");
  // }

  return (
    <section>
      <Header as="h1">{pageTitle}</Header>
      <p>{inputValue}</p>
      <Form style={{ width: 350 }} autoComplete="off">
        <Form.Field>
          <label>
            <code>State Management Binding Example</code>
          </label>
          <Input
            id="exInput"
            type="text"
            value={inputValue}
            placeholder="Start Typing..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setAppState({
                ...appStateObj,
                inputValue: event.currentTarget.value,
              })
            }
          />
        </Form.Field>
      </Form>
      <br></br>
      <div style={{ marginBottom: 20 }}>
        <Link to="/login">
          <MW_BUTTON>Login</MW_BUTTON>
        </Link>
      </div>
      <div>
        <MW_BUTTON
          appearance="secondary"
          onClick={(event: MouseEvent<HTMLElement>): void => {
            onTestChange(event);
          }}
        >
          Secondary Button
        </MW_BUTTON>
      </div>
    </section>
  );
};

HomeView.defaultProps = DefaultHomeViewProps;
export default HomeView;
