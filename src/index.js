import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FavouritesProvider from "./store/FavouriteContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavouritesProvider>
    <Router>
      <App />
    </Router>
  </FavouritesProvider>,
  document.getElementById("root")
);
