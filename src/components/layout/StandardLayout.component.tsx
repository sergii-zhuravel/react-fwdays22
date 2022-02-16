import APP_CONTAINER from "components/container/Container.component";
import APP_AUTH_HEADER from "components/header/AuthHeader.component";
import APP_NAVIGATION from "components/nav/Navigation.component";
import { IAppContainerProps } from "components/container/Container.types";
import { PusherContainer } from "components/layout/StandardLayout.styles";
import React, { SyntheticEvent, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Button, Grid, Icon, Input, Sidebar } from "semantic-ui-react";
import DefaultSubject from "store/RecoilObserver/DefaultSubject";
import { authenticationState } from "store/state/authentication.state";
import {
  INavigationState,
  navigationState,
} from "store/state/navigation.state";
import { TOPIC_UPDATE_NAV_STATE } from "store/topics/navigation.topics";

const closeChatDrawer = (
  event: SyntheticEvent,
  viewState: INavigationState
): void => {
  event.preventDefault();
  if (viewState.isChatDrawerOpen) {
    DefaultSubject.notify(TOPIC_UPDATE_NAV_STATE, {
      isChatDrawerOpen: false,
    });
  }
};

const APP_STANDARD_LAYOUT: React.FC<IAppContainerProps> = (
  props: IAppContainerProps
) => {
  const { isAuthenticated } = useRecoilValue(authenticationState);
  const navState = useRecoilValue(navigationState);
  const { children } = props;
  // const [appState, setAppState] = useRecoilState(globalState);
  // const { children, path } = props;

  // useEffect(() => {
  //   if (appState.currentPage?.path !== path) {
  //     setAppState({
  //       currentPage: props,
  //     });
  //   }
  // });
  return (
    <>
      {!isAuthenticated && (
        <APP_CONTAINER fluid>
          <APP_AUTH_HEADER />
          {children}
        </APP_CONTAINER>
      )}
      {isAuthenticated && (
        <APP_CONTAINER fluid>
          <Sidebar.Pushable>
            {/* Chat Drawer */}
            {/* @todo: Create component out of this */}
            <Sidebar
              as={PusherContainer}
              animation="overlay"
              direction="right"
              visible={navState.isChatDrawerOpen}
              width="wide"
            >
              {/* Header */}
              <Grid columns="two" verticalAlign="middle">
                <Grid.Column textAlign="left" style={{ width: "65px" }}>
                  {/* @todo: Consider moving close button to Storybook */}
                  <Button
                    style={{ background: "none" }}
                    animated
                    onClick={(event: SyntheticEvent): void =>
                      closeChatDrawer(event, navState)
                    }
                  >
                    <Button.Content visible>
                      <Icon name="arrow left" size="small" />
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow left" size="large" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign="left">
                  <h4>Chat</h4>
                </Grid.Column>
              </Grid>
              <Input
                label="Ask me something"
                style={{ position: "fixed", bottom: 24 }}
              />
            </Sidebar>
            <Sidebar.Pusher
              onClick={(event: SyntheticEvent): void =>
                closeChatDrawer(event, navState)
              }
            >
              <APP_NAVIGATION />
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </APP_CONTAINER>
      )}
    </>
  );
};

export default APP_STANDARD_LAYOUT;
