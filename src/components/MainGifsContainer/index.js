import React from "react";
import './styles.css'

export default function mainGifsContainer({gifs}) {
  return (
    <section>
      {gifs.map((gif) => {
        return (
          <div key={gif}>
            <img src={gif} alt="gif" />
          </div>
        );
      })}
    </section>
  );
}
