import React from "react";
import { IAppAuthHeaderProps, DefaultAppAuthHeaderProps } from "./Header.types";
import { Header } from "./Header.styles";
import { Image } from "semantic-ui-react";
import Logo from "common/theme/assets/adhd-myway-logo.png";

const APP_AUTH_HEADER: React.FC<IAppAuthHeaderProps> = (
  props: IAppAuthHeaderProps
) => {
  return (
    <Header className="app-auth-header" {...props}>
      <Image src={Logo} size="medium" style={{ margin: "0 auto" }} />
    </Header>
  );
};

APP_AUTH_HEADER.defaultProps = DefaultAppAuthHeaderProps;
export default APP_AUTH_HEADER;
