import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainGifsContainer from "./components/MainGifsContainer";
import Navigation from "./components/Navigation";
import GiphyLogo from "./assets/img/giphy.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='giphyLogo'>
        <img className='giphySvg' src={GiphyLogo} alt="Giphy Logo" />
        <h2>Giphy-App</h2>
      </div>
      <Navigation />
      <MainGifsContainer />
    </div>
  );
}

export default App;
