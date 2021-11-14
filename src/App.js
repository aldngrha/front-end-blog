import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Single from "./pages/SinglePosts";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/categories">
        <Category />
      </Route>
      <Route path="/single">
        <Single />
      </Route>
    </BrowserRouter>
  );
}

export default App;
