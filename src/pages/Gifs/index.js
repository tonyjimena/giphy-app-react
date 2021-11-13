import React, { useState, useEffect } from "react";
import MainGifsContainer from "../../components/MainGifsContainer";
import SearchComponent from "../../components/SearchComponent";
import LoaderComponent from "../../components/LoaderComponent";
import { useGifs } from "../../hooks/useGifs";
import { useIO } from "../../hooks/useIO";

import "./styles.scss";

export default function GifsPage() {
  const { loading, gifs, setLoading, setCategory, setKeyword, more } = useGifs({});
  const [Word, setWord] = useState("");
  const [title, setTitle] = useState(false);

  const [ containerRef, isVisible ] = useIO({
    root: null,
    rootMargin: "0px",
    threshold:1.0
  })

  function handleSubmit(e) {
    setLoading(true);
    setTitle(false);
    e.preventDefault();
    e.target.reset();
    setCategory("search");
    setKeyword(Word);
    setTitle(true);
  }

  function handleChange(e) {
    setWord(e.target.value);
  }

  useEffect(() => {
    if (isVisible) more()
  }, [isVisible, more])

  return (
    <>
      <SearchComponent
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
      />
      <br />
      {title ? <p>Búsqueda para {Word}</p> : ""}
      {loading ? (
        <LoaderComponent /> 
      ) : (
        <>
        <MainGifsContainer gifs={gifs} />
        <div ref={containerRef}>
          <LoaderComponent />
        </div>
        </>
      )}
    </>
  );
}
