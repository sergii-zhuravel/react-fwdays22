import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { actions } from "@storybook/addon-actions";
import APP_CONTAINER from "components/container/Container.component";
import APP_BUTTON from "components/button/Button.component";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("MW Button", () => {
    const eventActions = actions({
      onClick: "onClick",
      onMouseOver: "onMouseOver",
    });
    return (
      <APP_CONTAINER>
        <APP_BUTTON
          loading={boolean("Loading", false)}
          appearance={select("Appearance", ["primary", "secondary"], "primary")}
          disabled={boolean("Disabled", false)}
          {...eventActions}
        >
          {text("Label", "Button")}
        </APP_BUTTON>
      </APP_CONTAINER>
    );
  });
