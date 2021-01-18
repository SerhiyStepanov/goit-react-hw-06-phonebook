import React from "react";
import ReactDOM from "react-dom";
import store from "./Components/redux/store";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import App from "./App";
// console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
