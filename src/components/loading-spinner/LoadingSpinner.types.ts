export interface IAppLoadingSpinnerProps {
  className?: string;
  message?: string;
  children?: React.ReactNode;
}

export const DefaultAppLoadingSpinnerProps: IAppLoadingSpinnerProps = {
  message: "Loading",
};
