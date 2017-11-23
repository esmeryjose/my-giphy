const KEY = "api_key=KtzKVK1M9xQc4eJLPZjr5dds6ZURwzxd";
const URL = `https://api.giphy.com/v1/gifs/`;
// const URL = `https://api.giphy.com/v1/gifs/search?${KEY}&`;

export default class GiphyAdapter {
  static search(params) {
    const { search, limit } = params;
    const myURL = `${URL}search?${KEY}&q=${search}&limit=${limit}`;
    return fetch(`${myURL}`).then(res => res.json());
  }

  static trending(params) {
    const { limit } = params;
    const myURL = `${URL}trending?${KEY}&limit=${limit}`;
    return fetch(`${myURL}`).then(res => res.json());
  }
}
