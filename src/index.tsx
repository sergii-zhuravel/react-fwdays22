import { Global } from "@storybook/theming";
import { globalStyles } from "common/theme";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import RecoilObserver from "store/RecoilObserver/RecoilObserver";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <RecoilObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
