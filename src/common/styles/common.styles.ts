import { styled } from "@storybook/theming";
import { colors, dimensions } from "common/theme/constants";
import { Header, Divider, Card, Progress } from "semantic-ui-react";
import { Link } from "@reach/router";

// export const TEMP_NAV = styled.nav`
//   margin-bottom: 30px;
//   ul {
//     font-size: 24px;
//     list-style: "none";
//     padding-left: 0px;
//     li {
//       display: inline-block;
//       margin-left: 10px;
//       &:first-child {
//         margin-left: 0px;
//       }
//     }
//   }
// `;

export const CenteredPageHeader = styled(Header)`
  text-align: center;
`;

export const HorizontalDivider = styled(Divider)`
  margin: ${dimensions.marginSizes.containerMargin}em auto !important;
  span {
    font-family: "Avenir-Black";
    font-size: ${dimensions.fontSize.xl}px;
    text-transform: lowercase !important;
  }
`;

export const CTALink = styled(Link)`
  display: block;
  font-family: "Avenir-Black";
  font-size: 24px;
  margin: ${dimensions.marginSizes.containerMargin}em auto !important;
  text-align: center;
`;

export const VerticalProgressBar = styled(Progress)`
  &.progress {
    left: -50px;
    margin: 0;
    transform: rotate(-90deg);
    top: 44px;
    width: 110px; /* This is actually height, since it's rotated */
    height: 16px; /* This is actually width, since it's rotated */
    max-width: initial;
    .bar {
      background-color: ${colors.brand.blue} !important;
      height: 16px;
    }
  }
`;
