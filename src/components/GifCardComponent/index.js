import React, { useEffect } from "react";
import "./styles.scss";
import { useState } from "react";
import Like from "../../assets/img/like-icon.png";

export default function GifCardComponent({ id, title, imageUrl }) {
  const [like, setLike] = useState(false);
  const [clase, setClass] = useState("nolike");

  useEffect(() => {
    like ? setClass("liked") : setClass("nolike");
  }, [like]);

  return (
    <div key={id} className="CardComponent">
      <div className="like" onClick={() => setLike(!like)}>
        <img src={Like} alt="likes" width="30px" className={clase} />
      </div>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} className="CardComponent-Image" />
    </div>
  );
}
