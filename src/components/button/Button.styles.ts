import { Button } from "semantic-ui-react";
import { styled } from "@storybook/theming";
import { getEmSize, padY, padX } from "common/theme/utils";
import { widths, colors } from "common/theme/constants";

const BaseButtonStyles = `
  border-radius: 24px !important;
  box-shadow: 0px 24px 48px rgba(0, 148, 218, 0.1) !important;
  font-family: "Avenir-Black" !important;
  font-size: 24px !important;
  letter-spacing: 0.025em !important;
  min-height: 74px !important;
  transition: all 250ms ease-in-out !important;
`;

export const PrimaryButton = styled(Button)`
  ${BaseButtonStyles}
  ${padY(12)};
  ${padX(getEmSize(widths.md))};
  color: ${colors.ui.light} !important;
  background-color: ${colors.brand.green} !important;
  &:hover {
    background-color: ${colors.brand.teal} !important;
    transform: scale(1.12);
  }
`;

export const SecondaryButton = styled(Button)`
  ${BaseButtonStyles}
  ${padY(12)};
  ${padX(getEmSize(widths.md))};
  color: ${colors.ui.light} !important;
  background-color: ${colors.brand.blue} !important;
  &:hover {
    background-color: ${colors.brand.teal} !important;
    transform: scale(1.12);
  }
`;

export const IconButton = styled(Button)`
  &.icon-button {
    ${BaseButtonStyles}
    color: ${colors.ui.light} !important;
    background-color: ${colors.brand.blue} !important;
    display: inline-block !important;
    height: 74px;
    padding: 0 30px !important;
    margin: 0;
    i.icon {
      margin: 0 !important;
      font-size: 1.2em !important;
      opacity: 1 !important;
      color: ${colors.brand.white} !important;
      width: inherit;
    }
    &:hover {
      background-color: ${colors.brand.teal} !important;
      transform: scale(1.12);
    }
  }
`;

export const MW_ButtonMap = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};
