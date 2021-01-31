import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";

export function useGifs({ type = "gifs" }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [category, setCategory] = useState("trending");
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setLoading(true);
    getGifs(type, category, keyword)
      .then((res) => setGifs(res))
      .then(() => {
        setLoading(false);
      });
  }, [type, category, keyword]);
  return { loading, gifs, setLoading, setCategory, setKeyword };
}
