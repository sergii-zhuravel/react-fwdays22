import { styled } from "@storybook/theming";
import { colors, dimensions, fonts } from "common/theme/constants";
import { Card } from "semantic-ui-react";

export const BaseCardStyles = `
  background-color: ${colors.brand.white} !important;
  border-radius: 24px !important;
  box-shadow: 0px 24px 48px rgba(38, 46, 61, 0.15) !important;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  padding: ${dimensions.paddingSizes.cardPadding}px !important;
  width: 100%;
`;

// @todo: Move to Storybook
export const AppCard = styled(Card)`
  &.ui.card.app-card {
    ${BaseCardStyles}
    .content {
      .header {
        font-family: "Avenir-Medium";
        margin-bottom: 24px;
      }
    }
    .extra {
      border-top: 0 none !important;
      button {
        background: none;
        color: ${colors.brand.blue};
        padding-left: 0;
        &.button {
          i.icon {
            font-size: 1em;
            margin-left: 2px;
          }
        }
        &:hover {
          color: ${colors.brand.teal};
        }
      }
    }
  }
  &.auth-card {
    ${BaseCardStyles}
    width: 568px;
  }
`;
