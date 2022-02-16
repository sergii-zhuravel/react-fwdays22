import React, { ReactElement } from "react";
import {
  IAppButtonProps,
  DefaultAppButtonProps,
} from "components/button/Button.types";
import { MW_ButtonMap } from "components/button/Button.styles";

const renderButton = (props: IAppButtonProps): ReactElement<React.FC> => {
  const { appearance, children } = props;
  const MyWayButton = appearance
    ? MW_ButtonMap[appearance]
    : MW_ButtonMap["primary"];

  return (
    <MyWayButton {...props}>{children ? children : appearance}</MyWayButton>
  );
};

const APP_BUTTON: React.FC<IAppButtonProps> = (props: IAppButtonProps) => {
  return renderButton(props);
};

APP_BUTTON.defaultProps = DefaultAppButtonProps;
export default APP_BUTTON;
