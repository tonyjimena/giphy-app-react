import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";

export function useGifs({ type = "gifs" }) {

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [category, setCategory] = useState("search");
  const [offset, setOffset] = useState(0);
  const [keyword, setKeyword] = useState();

  const more = async () => {

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    const more_gifs = await getGifs(type, category, keywordToUse, offset + 12);

    setOffset((prev) => prev + 12);

    setGifs((prev) => [...prev, ...more_gifs]);
  };

  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    getGifs(type, category, keywordToUse, 0)
      .then((res) => setGifs(res))
      .then(() => {
        setLoading(false);
        localStorage.setItem('lastKeyword', keywordToUse)
      });
  }, [type, category, keyword]);

  return { loading, gifs, setLoading, setCategory, setKeyword, more };
}
