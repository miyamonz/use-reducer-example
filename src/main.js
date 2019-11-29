import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Provider } from "./store";

const initialState = {
  todos: ["hoge", "fuga"]
};

function _App() {
  return (
    <Provider initialState={initialState}>
      <App />
    </Provider>
  );
}
render(<_App />, document.querySelector("#app"));
