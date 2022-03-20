const apiKey = "KkIa0vg60W6oVzTcJ86bbj9sJn2MfuNx";

const getGifs = (
  type = "gifs",
  category = "search",
  keyword = null,
  offset = "0"
) => {
  const apiURL = `https://api.giphy.com/v1/${type}/${category}?api_key=${apiKey}&q=${keyword}&offset=${offset}&limit=6`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((res) => {
      const { data = [] } = res;
      const gifs = data.map((image) => {
        const { title, id } = image;
        const { url } = image.images.downsized_medium;
        return { id, title, url };
      });
      return gifs;
    });
};

export default getGifs;
