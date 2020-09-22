import React, { useState, useEffect } from "react";
import GifCardComponent from "../GifCardComponent";
import SearchComponent from "../SearchComponent";

import getGifs from "../../services/getGifs";
import searchGifs from "../../services/searchGifs";

import "./styles.css";

export default function MainGifsContainer() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    searchGifs(keyword).then(res => setGifs(res))
  }
  
  function handleChange(e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    getGifs().then((res) => setGifs(res));
  }, []);

  return (
    <>
      <SearchComponent onHandleSubmit={handleSubmit} onHandleChange={handleChange}/>
      <br />
      <section className="CardsContainer">
        {gifs.map((gif) => {
          return (
            <GifCardComponent
              key={gif.id}
              id={gif.id}
              title={gif.title}
              imageUrl={gif.url}
            />
          );
        })}
      </section>
    </>
  );
}
