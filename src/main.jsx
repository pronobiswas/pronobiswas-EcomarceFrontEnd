import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./helper/reduxToolkit/store.js";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>
);
