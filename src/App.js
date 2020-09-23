import React from "react";
import "./App.scss";
import Header from "./components/Header";
import MainGifsContainer from "./components/MainGifsContainer";
import Navigation from "./components/Navigation";
import GiphyLogoNav from "./components/GiphyLogoNav";

function App() {
  return (
    <div className="App">
      <Header />
      <GiphyLogoNav />
      <Navigation />
      <MainGifsContainer />
    </div>
  );
}

export default App;
