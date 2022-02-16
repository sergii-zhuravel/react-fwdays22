import React, { Suspense } from "react";
import { Router } from "@reach/router";
import HomeView from "views/home/home.view";
import DashboardView from "views/dashboard/dashboard.view";
import ExamplesView from "views/example/examples.view";
import ExamplesDetailView from "views/example/examples.detail.view";
import MW_LOADING_SPINNER from "components/loading-spinner/LoadingSpinner.component";
import LoginView from "views/auth/login/login.view";
import RegistrationView from "views/auth/registration/registration.view";
import VerificationView from "views/auth/verification/verification.view";
import MW_STANDARD_LAYOUT from "components/layout/StandardLayout.component";

export interface IAppProps {
  tite?: string;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <MW_STANDARD_LAYOUT>
      <Suspense fallback={<MW_LOADING_SPINNER />}>
        <Router>
          <LoginView path="/" />
          <RegistrationView path="/registration" />
          <VerificationView path="/verification" />
          <HomeView path="/home" />
          <DashboardView path="/dashboard" />
          <ExamplesView path="/examples">
            <ExamplesDetailView path=":exampleId" />
          </ExamplesView>
        </Router>
      </Suspense>
    </MW_STANDARD_LAYOUT>
  );
};

export default App;
