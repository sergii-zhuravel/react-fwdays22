import { ButtonProps } from "semantic-ui-react";

export interface IAppButtonProps extends ButtonProps {
  appearance?: "primary" | "secondary";
}
export const DefaultAppButtonProps: IAppButtonProps = {
  appearance: "primary",
};
