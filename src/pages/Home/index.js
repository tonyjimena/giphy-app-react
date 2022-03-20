import React, { useState, useEffect } from "react";
import MainGifsContainer from "../../components/MainGifsContainer";
import SearchComponent from "../../components/SearchComponent";
import LoaderComponent from "../../components/LoaderComponent";
import { useGifs } from "../../hooks/useGifs";
import { useIO } from "../../hooks/useIO";

import "./styles.scss";


export default function HomePage() {
  const { loading, gifs, setLoading, setCategory, setKeyword, more } = useGifs(
    {}
  );

  const [Word, setWord] = useState("");
  const [title, setTitle] = useState(false);

  const [containerRef, isVisible] = useIO({})

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
  }, [isVisible])

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
          {gifs.length > 0 ? (
            <>
              <MainGifsContainer gifs={gifs} />
              <div ref={containerRef}>
                <LoaderComponent />
              </div>
            </>

          ) : (
            <>
              <div>
                <h3>No hay resultados</h3>
              </div>
            </>
          )
          }
        </>

      )}
    </>
  );
}
