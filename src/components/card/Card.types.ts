import { CardProps } from "semantic-ui-react";

export interface IAppCardProps extends CardProps {
  authCard?: boolean;
  statsCard?: boolean;
  actionPath?: string;
  actionLabel?: string;
}
export const DefaultAppAuthHeaderProps: IAppCardProps = {
  authCard: false,
  statsCard: false,
  actionPath: "/",
  actionLabel: "DEFAULT LABEL",
};
