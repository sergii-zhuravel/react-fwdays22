import * as React from "react";
import { Header } from "semantic-ui-react";
import {
  IExampleDetailProps,
  DefaultExampleDetailViewProps,
} from "views/example/examples.interface";

const ExamplesDetailView: React.FC<IExampleDetailProps> = ({
  pageTitle,
  uri,
  location,
  exampleId,
}: IExampleDetailProps) => {
  return (
    <section>
      <Header as="h1">{pageTitle}</Header>
      <Header as="h3">Example ID: {exampleId}</Header>
    </section>
  );
};

ExamplesDetailView.defaultProps = DefaultExampleDetailViewProps;
export default ExamplesDetailView;
