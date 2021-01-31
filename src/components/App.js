import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import GiphyLogoNav from "./GiphyLogoNav";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Header />
      <GiphyLogoNav />
      <Navigation />
      <Router/>
    </div>
  );
}

export default App;
