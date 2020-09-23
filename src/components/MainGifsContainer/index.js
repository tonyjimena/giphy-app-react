import React, { useState, useEffect } from "react";
import GifCardComponent from "../GifCardComponent";
import SearchComponent from "../SearchComponent";
import LoaderComponent from "../LoaderComponent";

import getGifs from "../../services/getGifs";
import searchGifs from "../../services/searchGifs";

import "./styles.scss";

export default function MainGifsContainer() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    setShow(false);
    e.preventDefault();
    e.target.reset();
    searchGifs(keyword)
      .then((res) => setGifs(res))
      .then(() => setShow(true));
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    getGifs()
      .then((res) => setGifs(res))
      .then(() => setShow(true));
  }, []);

  return (
    <>
      <SearchComponent
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
      />
      <br />
      <section className="CardsContainer">
        {show ? (
          gifs.map((gif) => {
            return (
              <GifCardComponent
                key={gif.id}
                id={gif.id}
                title={gif.title}
                imageUrl={gif.url}
              />
            );
          })
        ) : (
          <LoaderComponent/>
        )}
      </section>
    </>
  );
}
