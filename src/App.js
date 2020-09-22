import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainGifsContainer from "./components/MainGifsContainer";

function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Gifs</h2>
      </div>
      <MainGifsContainer />
    </div>
  );
}

export default App;
