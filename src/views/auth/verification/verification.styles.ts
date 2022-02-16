import { styled } from "@storybook/theming";
import { dimensions } from "common/theme/constants";
import { Input } from "semantic-ui-react";

export const StyledVerificationInput = styled(Input)`
  &.verification-input {
    display: inherit;
    /** Turns off native spinner ui **/
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    &.error {
      input[type="number"] {
        /* @todo: move these colors to theme */
        background-color: rgba(159, 58, 56, 0.1);
        border-color: rgba(159, 58, 56, 0.33);
      }
    }
  }
`;

export const StyledPromptMessage = styled.p`
  &.prompt-message {
    font-size: ${dimensions.fontSize.small}px;
    text-align: center;
  }
`;
