import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import userInfo from "./store/user";

axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (
      error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.status === 419 ||
      error.response.status === 409
    ) {
      const token = localStorage.getItem("user");
      const user = new userInfo();
      if (token) {
        localStorage.removeItem("user");
      }
      user.logout();
    } else {
      throw error;
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
