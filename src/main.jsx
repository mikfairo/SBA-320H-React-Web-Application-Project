import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MessagesContext } from "./assets/MessagesContext.jsx";

createRoot(document.getElementById("root")).render(
  <MessagesContext.Provider value={[]}>
    <StrictMode>
      <App />
    </StrictMode>
  </MessagesContext.Provider>
);
