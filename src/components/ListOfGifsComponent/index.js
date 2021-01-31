import React from "react";
import "./styles.scss";
import GifCardComponent from "../GifCardComponent"

export default function ListOfGifsComponent({ gifs }) {
  return (
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
  );
}
