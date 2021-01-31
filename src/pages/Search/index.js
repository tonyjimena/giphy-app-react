import React, { useState, useEffect } from "react";
import MainGifsContainer from "../../components/MainGifsContainer";
import AdvancedSearchComponent from "../../components/AdvancedSearchComponent";
import LoaderComponent from "../../components/LoaderComponent";
import getGifs from "../../services/getGifs";
import searchGifs from "../../services/searchGifs";
import "./styles.scss";

export default function SearchPage({type = "gifs"}) {
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
      <AdvancedSearchComponent
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
      />
      <br />
      {title ? <p>Búsqueda para {keyword}</p> : ""}
      <br />
      <section className="CardsContainer">
        {show ? (
          <MainGifsContainer type={type} gifs={gifs} />
        ) : (
          <LoaderComponent />
        )}
      </section>
    </>
  );
}
