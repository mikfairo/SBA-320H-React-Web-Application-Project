import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MessagesContext } from "./components/MessagesContext.jsx";

function Main() {
  const [allMessages, setAllMessages] = useState([]);

  return (
    <MessagesContext.Provider value={[allMessages, setAllMessages]}>
      <StrictMode>
        <App />
      </StrictMode>
    </MessagesContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(<Main/>);
