import React from "react";
import "./styles.scss";
import ListOfGifsComponent from "../ListOfGifsComponent";

export default function MainGifsContainer({ gifs = [] }) {
  return (
    <>
      <section className="CardsContainer">
        <ListOfGifsComponent gifs={gifs} />
      </section>
    </>
  );
}
