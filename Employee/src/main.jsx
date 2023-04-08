import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { taskApiSlice } from "./features/task/taskSlice";
import { store } from "./app/store";
import { Provider } from "react-redux";
store.dispatch(taskApiSlice.endpoints.getTasks.initiate());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
