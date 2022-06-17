import store from "./app/store";
import Inventory from "./pages/Inventory";
import React from "react";
import { Provider } from "react-redux";

export default function Root(props) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Inventory />
      </Provider>
    </React.StrictMode>
  )
}
