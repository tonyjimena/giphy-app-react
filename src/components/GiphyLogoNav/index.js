import React, { useEffect } from "react";
import GiphyLogo from "../../assets/img/giphy.js";
import "./styles.scss";

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".giphyLogo").classList.add("scrolled");
  } else {
    document.querySelector(".giphyLogo").classList.remove("scrolled");
  }
}

export default function GiphyLogoNav() {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
  }, []);
  return (
    <div className="giphyLogo">
      <div></div>
      <GiphyLogo className="giphySvg" alt="Giphy Logo" />
      <h2>Giphy-App</h2>
    </div>
  );
}
