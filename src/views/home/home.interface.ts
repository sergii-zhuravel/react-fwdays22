import { IAuthenticationState } from "store/state/authentication.state";
import { IViewProps } from "views/view.types";

/**
 * INTERFACES
 */
export interface IHomeProps extends IViewProps {
  authState?: IAuthenticationState | undefined;
}

/**
 * DEFAULT PROPS
 */
export const DefaultHomeViewProps: IHomeProps = {
  pageTitle: "Home",
};
