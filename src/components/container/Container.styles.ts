import { styled } from "@storybook/theming";
import { getEmSize } from "common/theme/utils";
import { widths, dimensions, colors } from "common/theme/constants";
import { Container } from "semantic-ui-react";

const BaseContainerStyles = `
  margin: 0 auto;
  max-width: ${getEmSize(widths.xl)}em;
  width: auto;
`;

export const AppContainer = styled(Container)`
  ${BaseContainerStyles}
  background-color: ${colors.brand.light};

  &.page-wrapper {
    margin-top: 3em;
    margin-bottom: 8em;
  }
  &.large {
    margin: ${dimensions.marginSizes.containerMargin}em auto;
    width: ${getEmSize(widths.lg)}em !important;
  }
  &.medium {
    margin: ${dimensions.marginSizes.containerMargin}em auto;
    width: ${getEmSize(widths.md)}em !important;
  }
  &.small {
    margin: ${dimensions.marginSizes.containerMargin}em auto;
    width: ${getEmSize(widths.sm)}em !important;
  }
`;

export const AppWaveContainer = styled(Container)`
  &.wave-container {
    ${BaseContainerStyles}
    background: url("/wave.svg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    border-bottom: 50px solid ${colors.brand.teal} !important;
    min-height: 450px;
  }
`;
