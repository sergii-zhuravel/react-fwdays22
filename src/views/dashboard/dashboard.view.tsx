import { navigate } from "@reach/router";
import { VerticalProgressBar } from "common/styles/common.styles";
import CheckmarkIcon from "common/theme/assets/icons/checkmark.svg";
import DotIcon from "common/theme/assets/icons/dot.svg";
import FoodIcon from "common/theme/assets/icons/food.svg";
import SadIcon from "common/theme/assets/icons/sad.svg";
import StudyIcon from "common/theme/assets/icons/study.svg";
import APP_BUTTON from "components/button/Button.component";
import { IconButton } from "components/button/Button.styles";
import APP_CARD from "components/card/Card.component";
import { AppCard } from "components/card/Card.styles";
import APP_CONTAINER from "components/container/Container.component";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { Card, Grid, Header, Icon, Image, List } from "semantic-ui-react";
import { authenticationState } from "store/state/authentication.state";
import {
  DefaultDashboardViewProps,
  IDashboardProps,
} from "views/dashboard/dashboard.types";
import {
  StatsGrid,
  StatsGridColumn,
} from "views/dashboard/dashboard.view.styles";

// const renderCards = (
//   contactList: Array<IMockContact>
// ): Array<React.ReactNode> => {
//   return contactList.map((contact: IMockContact, index: number) => {
//     return (
//       <Card key={`contact-card-${index}`}>
//         <Image src={contact.avatar} wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{contact.name}</Card.Header>
//           <Card.Meta>
//             <span className="date">{contact.title}</span>
//           </Card.Meta>
//           <Card.Description>{contact.description}</Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <a>
//             <Icon name="user" />
//             22 Friends
//           </a>
//         </Card.Content>
//       </Card>
//     );
//   });
// };

const DashboardView: React.FC<IDashboardProps> = ({
  pageTitle,
}: IDashboardProps) => {
  const { isAuthenticated, user } = useRecoilValue(authenticationState);
  // const contactList: Array<IMockContact> = useRecoilValue(contactsList);

  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <APP_CONTAINER className="page-wrapper">
      <Header as="h1" style={{ marginBottom: 32 }}>
        Good Morning, {user.username}
      </Header>
      <Grid stackable>
        <Grid.Row columns="equal">
          {/* CARD 1 */}
          <Grid.Column>
            <APP_CARD
              className="app-card"
              actionLabel="Log excersize"
              actionPath="/"
            >
              <Card.Content>
                <Card.Header>Have you exercized today?</Card.Header>
                <Card.Description>
                  Exercising regularly can help you stay focused and alert in
                  your studies.
                </Card.Description>
              </Card.Content>
            </APP_CARD>
            <Grid>
              <Grid.Row columns="equal">
                <Grid.Column>
                  <AppCard className="app-card" as="a">
                    <Image src={FoodIcon} style={{ background: "0 none" }} />
                  </AppCard>
                </Grid.Column>
                <Grid.Column>
                  <AppCard className="app-card" as="a">
                    <Image src={StudyIcon} style={{ background: "0 none" }} />
                  </AppCard>
                </Grid.Column>
                <Grid.Column>
                  <AppCard className="app-card" as="a">
                    <Image src={SadIcon} style={{ background: "0 none" }} />
                  </AppCard>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          {/* CARD 2 */}
          <Grid.Column>
            <APP_CARD
              className="app-card"
              actionLabel="View snapshot"
              actionPath="/"
              statsCard
            >
              {/* @todo: Create component out of this */}
              <StatsGrid className="stats-grid" stretched>
                <StatsGridColumn className="stats-grid-column">
                  <h5>S</h5>
                  <VerticalProgressBar percent={83} color="blue" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>M</h5>
                  <VerticalProgressBar percent={32} color="blue" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>T</h5>
                  <VerticalProgressBar percent={63} color="teal" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>W</h5>
                  <VerticalProgressBar percent={89} color="teal" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>T</h5>
                  <VerticalProgressBar percent={51} color="teal" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>F</h5>
                  <VerticalProgressBar percent={67} color="teal" />
                </StatsGridColumn>
                <StatsGridColumn className="stats-grid-column">
                  <h5>S</h5>
                  <VerticalProgressBar percent={89} color="teal" />
                </StatsGridColumn>
              </StatsGrid>
            </APP_CARD>
            <div>
              <APP_BUTTON appearance="secondary">View Progress</APP_BUTTON>
              <IconButton className="icon-button">
                <Icon name="plus"></Icon>
              </IconButton>
            </div>
          </Grid.Column>

          {/* CARD 3 */}
          <Grid.Column>
            <APP_CARD
              className="app-card"
              actionLabel="Manage Tasks"
              actionPath="/"
            >
              {/* @todo: Create component out of this */}
              <Card.Content>
                <Card.Header>Today's Tasks</Card.Header>
                <Card.Description>
                  <List relaxed="very">
                    <List.Item>
                      <Image src={CheckmarkIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Brush Teeth
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image src={CheckmarkIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Eat Breakfast
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image src={CheckmarkIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Finish Homework
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image src={DotIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Start Physics Assignment
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image src={DotIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Exercise
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image src={DotIcon} />
                      <List.Content style={{ paddingTop: "4px" }}>
                        Finish Setting Up Profile
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
            </APP_CARD>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <Card.Group itemsPerRow={3}>
        {renderCards(contactList)}
      </Card.Group> */}
    </APP_CONTAINER>
  );
};

DashboardView.defaultProps = DefaultDashboardViewProps;
export default DashboardView;
