import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import NoteState from "./Context/notes/noteState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NoteState>
        <App />
      </NoteState>
    </Router>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
