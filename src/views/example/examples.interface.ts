import { IViewProps } from "views/view.types";

/**
 * INTERFACES
 */
export type IExamplesProps = IViewProps;
export interface IExampleDetailProps extends IViewProps {
  exampleId?: string | number | undefined;
}

/**
 * DEFAULT PROPS
 */
export const DefaultExamplesViewProps: IExamplesProps = {
  pageTitle: "Examples",
};
export const DefaultExampleDetailViewProps: IExamplesProps = {
  pageTitle: "Example",
};
