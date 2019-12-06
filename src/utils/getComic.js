import axios from "axios";

import { marvelapikey, marvelapihash } from "../config";

const getComic = async () => {
  const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${marvelapikey}&hash=${marvelapihash}`;
  const response = await axios.get(url).catch(console.log(error));
  const data = await response.data.results;
  return data;
};

export default getComic;
