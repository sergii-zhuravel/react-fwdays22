import React from "react";
import {
  IAppLoadingSpinnerProps,
  DefaultAppLoadingSpinnerProps,
} from "components/loading-spinner/LoadingSpinner.types";
import {
  LoadingSpinner,
  Logo,
  LoadingSpinnerMessage,
} from "components/loading-spinner/LoadingSpinner.styles";
import { Header } from "semantic-ui-react";
import LogoIcon from "common/theme/assets/adhd-myway-icon.png";

const renderSpinner = (props: IAppLoadingSpinnerProps) => {
  const { message, children } = props;
  return (
    <LoadingSpinner>
      <Logo src={LogoIcon} />
      <LoadingSpinnerMessage>
        <Header as="h3">{message}</Header>
      </LoadingSpinnerMessage>
      {children}
    </LoadingSpinner>
  );
};

const APP_LOADING_SPINNER: React.FC<IAppLoadingSpinnerProps> = (props) => {
  return renderSpinner(props);
};

APP_LOADING_SPINNER.defaultProps = DefaultAppLoadingSpinnerProps;

export default APP_LOADING_SPINNER;
