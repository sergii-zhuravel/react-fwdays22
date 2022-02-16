import { ContainerProps } from "semantic-ui-react";

export interface IAppContainerProps extends ContainerProps {
  waveBackground?: boolean;
}
export const DefaultAppContainerProps: IAppContainerProps = {
  waveBackground: false,
  fluid: false,
};
