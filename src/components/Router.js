import React from "react";
import { Route } from "wouter";
import GifsPage from "../pages/Gifs";
import StickersPage from "../pages/Stickers";
import SearchPage from "../pages/Search";
import HomePage from "../pages/Home";

function Router() {
  return (
    <>
      <Route path="/about">About</Route>
      <Route path="/users/:name">
        {(params) => <div>Hello, {params.name}!</div>}
      </Route>
      <Route path="/" component={HomePage} />
      <Route path="/gifs" component={GifsPage} />
      <Route path="/stickers" component={StickersPage} />
      <Route path="/search/:keyword?">
          {params => <SearchPage keyword={params.keyword}/>}
      </Route>
    </>
  );
}

export default Router;
