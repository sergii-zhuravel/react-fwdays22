import { styled, keyframes } from "@storybook/theming";
import { widths } from "common/theme/constants";
import { getEmSize } from "common/theme/utils";

const rotateLogo = keyframes`
  from {
    transform: rotateX(0deg);
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateX(180deg);
    transform: rotateY(180deg);
    transform: skew(15deg, -10deg);
  }
  to {
    transform: rotateX(360deg);
    transform: rotateY(360deg);
  }
`;

const animateEllipsis = keyframes`
  to {
    width: 1.25em;
  }
`;

export const Logo = styled.img`
  label: mw-logo;
  animation: ${rotateLogo} 3s infinite ease !important;
  display: block;
  margin: 0 auto;
  width: 100px;
`;

export const LoadingSpinner = styled.div`
  label: mw-loading-spinner;
  margin: auto;
  max-width: ${getEmSize(widths.xl)}em;
  width: auto;
`;

export const LoadingSpinnerMessage = styled.div`
  label: mw-loading-spinner-message;
  margin: 0 auto;
  width: fit-content;
  h3 {
    display: inline-block;
    margin-left: 1em !important;
    min-width: 120px;
    &:after {
      overflow: hidden !important;
      display: inline-block !important;
      vertical-align: bottom !important;
      animation: ${animateEllipsis} steps(4, end) 900ms infinite !important;
      content: "...";
      width: 0px;
    }
  }
`;
