import { styled } from "@storybook/theming";
import { colors } from "common/theme/constants";
import { Container } from "semantic-ui-react";

export const PusherContainer = styled(Container)`
  &.ui.container.sidebar.right {
    background-color: ${colors.brand.white} !important;
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
    max-height: 750px !important;
    overflow-x: hidden;
    position: fixed !important;
    padding: 10px !important;
    top: 10px !important;
  }
`;
