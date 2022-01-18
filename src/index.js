import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import NoteState from "./Context/notes/noteState";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteState>
        <App />
      </NoteState>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
