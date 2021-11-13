import React, { useState } from "react";
import MainGifsContainer from "../../components/MainGifsContainer";
import SearchComponent from "../../components/SearchComponent";
import LoaderComponent from "../../components/LoaderComponent";
import { useGifs } from "../../hooks/useGifs";

import "./styles.scss";

export default function StickersPage() {
  const { loading, gifs, setLoading, setCategory, setKeyword } = useGifs({
    type: "stickers"
  });
  const [Word, setWord] = useState("");
  const [title, setTitle] = useState(false);

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
  return (
    <section class="page page-stickers">
      <SearchComponent
        onHandleSubmit={handleSubmit}
        onHandleChange={handleChange}
      />
      <br />
      {title ? <p>Búsqueda para {Word}</p> : ""}
      {loading ? <LoaderComponent /> : <MainGifsContainer gifs={gifs} />}
    </section>
  );
}
