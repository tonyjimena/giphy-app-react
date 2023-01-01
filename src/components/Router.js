import React from "react";
import { Route } from "wouter";
import GifsPage from "../pages/Gifs";
import StickersPage from "../pages/Stickers";
import GifDetail from "../pages/GifDetail";
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
      <Route path="/gif/:id">
          {params => <GifDetail id={params.id}/>}
      </Route>
    </>
  );
}

export default Router;
