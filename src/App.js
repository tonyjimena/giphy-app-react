import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainGifsContainer from "./components/MainGifsContainer";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs().then((res) => setGifs(res));
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <h2>Gifs</h2>
      </div>
      <MainGifsContainer gifs={gifs} />
    </div>
  );
}

export default App;
