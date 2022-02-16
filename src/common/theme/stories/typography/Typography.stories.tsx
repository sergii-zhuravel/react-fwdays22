import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import APP_CONTAINER from "components/container/Container.component";
import { Header } from "semantic-ui-react";
import { typeCollection } from "common/theme/stories/typography/Typography.model";
import { IAppContainerProps } from "components/container/Container.types";

const renderTypography = (): Array<ReactElement<IAppContainerProps>> => {
  return typeCollection.map((typeObj, index) => {
    return (
      <APP_CONTAINER key={`typography-container-${index}`}>
        <h2 style={typeObj.fontFamily}>{typeObj.name}</h2>
        <p style={typeObj.fontFamily}>{typeObj.text}</p>
      </APP_CONTAINER>
    );
  });
};

storiesOf("Typograpy", module)
  .add("Headings", () => (
    <>
      <blockquote>
        <h1>Headings</h1>
      </blockquote>
      <APP_CONTAINER>
        <Header as="h1">H1 - This is a H1 heading</Header>
        <Header as="h2">H2 - This is a H1 heading</Header>
        <Header as="h3">H3 - This is a H1 heading</Header>
        <Header as="h4">H4 - This is a H1 heading</Header>
        <Header as="h5">H5 - This is a H1 heading</Header>
        <Header as="h6">H6 - This is a H1 heading</Header>
      </APP_CONTAINER>
    </>
  ))
  .add("Fonts", () => (
    <>
      <APP_CONTAINER>
        <Header as="h1">Fonts</Header>
      </APP_CONTAINER>

      {renderTypography()}
    </>
  ));
