import { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";

export function useGifs({ type = "gifs" }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [category, setCategory] = useState("trending");

  // estado para contar el número de bloques que pido, lo necesito para que picsum no me devuelva siempre las mismas imágenes
  const [offset, setOffset] = useState(0);

  // función para pedir más imágenes
  const more = async () => {
    const more_gifs = await getGifs(type, category, keyword, offset + 6);
    setOffset((prev) => prev + 6);
    setGifs((prev) => [...prev, ...more_gifs]);
  };

  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setLoading(true);
    getGifs(type, category, keyword, 0)
      .then((res) => setGifs(res))
      .then(() => {
        setLoading(false);
      });
  }, [type, category, keyword]);

  return { loading, gifs, setLoading, setCategory, setKeyword, more };
}
