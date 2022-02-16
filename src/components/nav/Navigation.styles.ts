import { styled } from "@storybook/theming";
import { colors, dimensions } from "common/theme/constants";
import getEmSize from "common/theme/utils/get-em-size";
import { Menu } from "semantic-ui-react";

export const DesktopNavigation = styled(Menu)`
  &.inverted.ui.menu {
    &.mw-desktop-navigation {
      background-color: ${colors.brand.white};
      .item.mw-menu-item {
        &.active {
          color: ${colors.brand.lightBlue} !important;
        }
      }
    }
  }
`;

export const MenuItem = styled(Menu.Item)`
  &.item.mw-menu-item {
    color: ${colors.ui.light};
    font-family: "Avenir Black";
    font-size: ${dimensions.fontSize.large}px;
    letter-spacing: ${getEmSize(dimensions.fontSize.regular)}px;
    transition: color 500ms ease-in-out !important;

    &:hover {
      color: ${colors.brand.blue} !important;
    }
  }
`;
