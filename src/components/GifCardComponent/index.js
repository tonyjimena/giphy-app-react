import React from "react";
import "./styles.scss";

export default function GifCardComponent({ id, title, imageUrl }) {
  return (
    <div key={id} className="CardComponent">
      {/* <h3>{title}</h3> */}
      <img src={imageUrl} alt={title} className="CardComponent-Image" />
    </div>
  );
}
