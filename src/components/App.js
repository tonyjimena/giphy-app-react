import React from "react";
import Header from "./Header";
import MainGifsContainer from "./MainGifsContainer";
import Navigation from "./Navigation";
import GiphyLogoNav from "./GiphyLogoNav";

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
