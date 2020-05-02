import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage.js";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
