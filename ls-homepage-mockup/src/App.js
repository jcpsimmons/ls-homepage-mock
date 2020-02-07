import React from "react";
import TopNav from "./components/TopNav.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Icons from "./components/Icons.js";
import logo from "./logo.svg";

import "./App.css";
import "./bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Header />
      <Hero />
      <Icons />
      {/* <Popular /> */}
      {/* <Personnel /> */}
      {/* <MustReadTips /> */}
      {/* <Tags /> */}
      {/* <CustomerReviews /> */}
    </div>
  );
}

export default App;
