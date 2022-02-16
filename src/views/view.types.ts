import { RouteComponentProps } from "@reach/router";
import { IAuthenticationState } from "store/state/authentication.state";

export interface IViewProps extends RouteComponentProps {
  authState?: IAuthenticationState;
  children?: React.ReactNode;
  pageTitle?: string;
}
