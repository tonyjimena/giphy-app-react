import React from "react";
import { Route } from "wouter";
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
      <Route path="/about">About</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path="/" component={MainGifsContainer} />
      <Route path="/stickers">
        <MainGifsContainer type="stickers"/>
      </Route>
    </div>
  );
}

export default App;
