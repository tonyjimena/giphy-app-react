import React, { useEffect, useState } from "react";
import MainGifsContainer from "../../components/MainGifsContainer";
import getGifs from "../../services/getGifs";

import "./styles.scss";

export default function GifsPage() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs()
      .then((res) => setGifs(res))
      .then(() => {});
  }, []);
  return (
    <>
      <MainGifsContainer gifs={gifs} />
    </>
  );
}
