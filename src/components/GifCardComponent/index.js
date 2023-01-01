import React, { useEffect } from "react";
import "./styles.scss";
import { useState } from "react";
import LikeIcon from "../../assets/img/like-icon.png";

import { Link } from "wouter";

export default function GifCardComponent({ id, title, imageUrl }) {
  const [like, setLike] = useState(false);
  const [clase, setClass] = useState("nolike");

  useEffect(() => {
    like ? setClass("liked") : setClass("nolike");
  }, [like]);

  return (
    <div key={id} className="CardComponent">
      <div className="like" onClick={() => setLike(!like)}>
        <img src={LikeIcon} alt="likes" width="30px" className={clase} />
      </div>
      <Link href={`/gif/${id}`} className="CardComponent-Image" >
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} className="CardComponent-Image" />
      </Link>
    </div>
  );
}
