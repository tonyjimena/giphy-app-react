const apiKey = "KkIa0vg60W6oVzTcJ86bbj9sJn2MfuNx";

export default function searchGifs(keyword, type = "gifs") {
  return fetch( `https://api.giphy.com/v1/${type}/search?api_key=${apiKey}&q=${keyword}`)
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
}
