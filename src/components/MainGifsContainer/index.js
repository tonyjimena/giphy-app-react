import React, { useState, useEffect } from "react";
import SearchComponent from "../SearchComponent";
import LoaderComponent from "../LoaderComponent";

import getGifs from "../../services/getGifs";
import searchGifs from "../../services/searchGifs";

import "./styles.scss";
import ListOfGifsComponent from "../ListOfGifsComponent";

export default function MainGifsContainer({ type = "gifs", gifs_def = [] }) {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);

  function handleSubmit(e) {
    setShow(false);
    setTitle(false);
    e.preventDefault();
    e.target.reset();
    searchGifs(keyword, type)
      .then((res) => setGifs(res))
      .then(() => {
        setShow(true);
        setTitle(true);
      });
  }

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    getGifs(type)
      .then((res) => setGifs(res))
      .then(() => {
        setShow(true);
      });
  }, [type]);

  return (
    <>
      {/* <ListOfGifsComponent gifs={gifs} /> */}

      <SearchComponent
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
      />
      <br />
      {title ? <p>Búsqueda para {keyword}</p> : ""}
      <br />
      <section className="CardsContainer">
        {show ? <ListOfGifsComponent gifs={gifs} /> : <LoaderComponent />}
      </section>
    </>
  );
}
