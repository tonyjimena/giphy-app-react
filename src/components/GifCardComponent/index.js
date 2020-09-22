import React from "react";
import "./styles.css";

export default function GifCardComponent({ id, title, imageUrl }) {
  return (
    <div key={id} className="CardComponent">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} className="CardComponent-Image" />
    </div>
  );
}
