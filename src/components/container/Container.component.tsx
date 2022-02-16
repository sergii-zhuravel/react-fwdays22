import * as React from "react";
import {
  IAppContainerProps,
  DefaultAppContainerProps,
} from "components/container/Container.types";
import {
  AppContainer,
  AppWaveContainer,
} from "components/container/Container.styles";

// const MW_CONTAINER_TEST_ID = { "data-testid": "mw-container" };
const APP_CONTAINER: React.FC<IAppContainerProps> = ({
  children,
  className,
  fluid,
  waveBackground,
}: IAppContainerProps) =>
  waveBackground ? (
    <AppWaveContainer className={className} fluid={fluid}>
      {children}
    </AppWaveContainer>
  ) : (
    <AppContainer className={className} fluid={fluid}>
      {children}
    </AppContainer>
  );

APP_CONTAINER.defaultProps = DefaultAppContainerProps;
export default APP_CONTAINER;
