import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";

export function useGifs({ type = "gifs" }) {

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [category, setCategory] = useState("search");
  const [offset, setOffset] = useState(0);
  const [keyword, setKeyword] = useState();

  const keywordToUse = keyword || localStorage.getItem('lastKeyword')


  const more = async () => {
    const more_gifs = await getGifs(type, category, keywordToUse, offset + 6);
    setOffset((prev) => prev + 6);
    setGifs((prev) => [...prev, ...more_gifs]);
  };

  useEffect(() => {
    setLoading(true);
    getGifs(type, category, keywordToUse, 0)
      .then((res) => setGifs(res))
      .then(() => {
        setLoading(false);
        localStorage.setItem('lastKeyword', keywordToUse)
      });
  }, [type, category, keyword]);

  return { loading, gifs, setLoading, setCategory, setKeyword, more };
}
