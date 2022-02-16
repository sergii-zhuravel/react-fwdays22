import { Link, redirectTo } from "@reach/router";
import * as React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Header, Menu, MenuItemProps } from "semantic-ui-react";
import { authenticationState } from "store/state/authentication.state";
import { exampleViewState } from "views/example/examples.atoms";
import {
  DefaultExamplesViewProps,
  IExamplesProps,
} from "views/example/examples.interface";

const ExamplesView: React.FC<IExamplesProps> = ({
  pageTitle,
  children,
}: IExamplesProps) => {
  const [viewState, setExampleViewState] = useRecoilState(exampleViewState);
  const { isAuthenticated } = useRecoilValue(authenticationState);

  if (!isAuthenticated) {
    redirectTo("/login");
  }

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ): void => {
    event.preventDefault();
    setExampleViewState({
      ...viewState,
      activeItemName: data.name ? data.name : "",
    });
    console.log(viewState);
  };

  const { activeItemName } = viewState;
  return (
    <section>
      <Header as="h1">{pageTitle}</Header>
      <Menu>
        <Menu.Item
          name="123"
          active={activeItemName === "123"}
          onClick={handleItemClick}
        >
          <Link to="/examples/123">Example 123</Link>
        </Menu.Item>
        <Menu.Item
          name="ABC"
          active={activeItemName === "ABC"}
          onClick={handleItemClick}
        >
          <Link to="/examples/ABC">Example ABC</Link>
        </Menu.Item>
      </Menu>
      {children}
    </section>
  );
};

ExamplesView.defaultProps = DefaultExamplesViewProps;
export default ExamplesView;
