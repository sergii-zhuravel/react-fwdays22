import React from "react";
import { storiesOf } from "@storybook/react";
import { ColorLabel, CodeLabel } from "./ColorSwatch.styles";
import { styled } from "@storybook/theming";
import { colors } from "common/theme/constants";
import APP_CONTAINER from "components/container/Container.component";
import { Header, Grid } from "semantic-ui-react";

/**
 * buildColorSwatch
 * @param {string} hexString
 */
const buildColorSwatch = (hexString: string) => {
  return styled.div`
    background-color: ${hexString};
    border: 2px solid ${colors.brand.black};
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin: 10px auto;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `;
};

/**
 * renderColors
 * @param {string} colorType
 * @returns {React.ReactNode<ColorSwatch>}
 */
const renderColors = (colorType: string): React.ReactNode => {
  return Object.keys(colors[colorType]).map((colorName: string, i: number) => {
    const ColorSwatch = buildColorSwatch(colors[colorType][colorName]);
    return (
      <Grid.Column key={`colorName-${colorName}_keyColor-${i}`}>
        <ColorSwatch />
        <ColorLabel>{colorName}</ColorLabel>
        <CodeLabel>
          <code>{colors[colorType][colorName]}</code>
        </CodeLabel>
      </Grid.Column>
    );
  });
};

storiesOf("Color Palette", module)
  .add("Brand", () => (
    <APP_CONTAINER>
      <Header as="h2">Brand</Header>
      <Grid columns={6} padded>
        {renderColors("brand")}
      </Grid>
    </APP_CONTAINER>
  ))
  .add("Feedback", () => (
    <APP_CONTAINER>
      <Header as="h2">Feedback</Header>
      <Grid columns={6} padded>
        {renderColors("feedback")}
      </Grid>
    </APP_CONTAINER>
  ))
  .add("UI", () => (
    <APP_CONTAINER>
      <Header as="h2">UI</Header>
      <Grid columns={6} padded>
        {renderColors("ui")}
      </Grid>
    </APP_CONTAINER>
  ));
