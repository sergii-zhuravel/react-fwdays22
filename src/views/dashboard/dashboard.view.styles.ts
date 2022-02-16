import { styled } from "@storybook/theming";
import { Grid } from "semantic-ui-react";

export const StatsGrid = styled(Grid)`
  &.stats-grid {
    margin: 0 auto;
  }
`;

export const StatsGridColumn = styled(Grid.Column)`
  &.stats-grid-column {
    padding-left: 0;
    padding-right: 0;
    width: 38px !important;
  }
`;
