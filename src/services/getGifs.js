const apiKey = "KkIa0vg60W6oVzTcJ86bbj9sJn2MfuNx";
const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

export default function getGifs() {
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
}
