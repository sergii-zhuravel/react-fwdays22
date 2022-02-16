import { MenuProps } from "semantic-ui-react";
// import { EPagePaths } from "~/components/nav/Navigation.utils";

export interface IAppNavigationProps extends MenuProps {
  backgroundColor?: string;
}

export const DefaultAppNavigationProps: IAppNavigationProps = {
  backgroundColor: "#1c1c1c",
};
