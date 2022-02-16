import React, { SyntheticEvent } from "react";
import { IAppCardProps } from "components/card/Card.types";
import { DefaultAppAuthHeaderProps } from "components/header/Header.types";
import { AppCard } from "components/card/Card.styles";
import { Button, ButtonProps, Card, Icon } from "semantic-ui-react";
import { navigate } from "@reach/router";

const onActionClick = (
  event: SyntheticEvent,
  actionPath: string | undefined
): void => {
  event.preventDefault();
  if (actionPath) {
    navigate(actionPath);
  }
};

const APP_CARD: React.FC<IAppCardProps> = (props: IAppCardProps) => {
  const { authCard, actionLabel, actionPath, statsCard, children } = props;
  const statsStyle = statsCard ? { marginTop: 60 } : null;
  return (
    <AppCard {...props}>
      {children}
      {!authCard && actionLabel && (
        <Card.Content extra style={statsStyle}>
          <Button
            onClick={(event: SyntheticEvent): void =>
              onActionClick(event, actionPath)
            }
          >
            <Button.Content>
              <span>{actionLabel}</span>
              <Icon name="arrow right" size="small"></Icon>
            </Button.Content>
          </Button>
        </Card.Content>
      )}
    </AppCard>
  );
};

APP_CARD.defaultProps = DefaultAppAuthHeaderProps;
export default APP_CARD;
