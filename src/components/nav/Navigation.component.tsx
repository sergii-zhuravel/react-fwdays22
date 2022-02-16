import React, { SyntheticEvent } from "react";
import {
  DefaultAppNavigationProps,
  IAppNavigationProps,
} from "components/nav/Navigation.types";
import { DesktopNavigation, MenuItem } from "components/nav/Navigation.styles";
import { EPagePaths } from "components/nav/Navigation.utils";
import { navigate } from "@reach/router";
import { Menu, Image, Icon } from "semantic-ui-react";
import Logo from "common/theme/assets/adhd-myway-logo.png";
import DefaultSubject from "store/RecoilObserver/DefaultSubject";
import { TOPIC_UPDATE_NAV_STATE } from "store/topics/navigation.topics";
import { useRecoilValue } from "recoil";
import {
  INavigationState,
  navigationState,
} from "store/state/navigation.state";

const toggleChatDrawer = (
  event: SyntheticEvent,
  viewState: INavigationState
): void => {
  event.preventDefault();
  DefaultSubject.notify(TOPIC_UPDATE_NAV_STATE, {
    isChatDrawerOpen: !viewState.isChatDrawerOpen,
  });
};

const onMenuItemClick = (
  event: SyntheticEvent,
  data: any,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onCloseDrawer?: () => {}
): void => {
  event.preventDefault();
  const { active, path } = data;

  if (active) {
    return;
  }

  navigate(path);
  if (onCloseDrawer) {
    onCloseDrawer();
  }
};

const APP_NAVIGATION: React.FC<IAppNavigationProps> = (
  props: IAppNavigationProps
) => {
  const viewState = useRecoilValue(navigationState);
  return (
    <DesktopNavigation {...props}>
      <Menu.Item
        as="a"
        header
        path={EPagePaths.DASHBOARD}
        onClick={(event: SyntheticEvent, data): void => {
          onMenuItemClick(event, data);
        }}
      >
        <Image src={Logo} size="small" style={{ margin: "0 auto" }} />
      </Menu.Item>
      <MenuItem
        className="mw-menu-item"
        as="a"
        path={EPagePaths.DASHBOARD}
        onClick={(event: SyntheticEvent, data): void => {
          onMenuItemClick(event, data);
        }}
      >
        DASHBOARD
      </MenuItem>
      <MenuItem
        position="right"
        fixed="top"
        onClick={(event: SyntheticEvent): void => {
          toggleChatDrawer(event, viewState);
        }}
      >
        <Icon name="chat" circular inverted color="blue" size="large" />
      </MenuItem>
    </DesktopNavigation>
  );
};

APP_NAVIGATION.defaultProps = DefaultAppNavigationProps;

export default APP_NAVIGATION;
