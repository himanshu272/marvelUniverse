import axios from "axios";

import { marvelapikey, marvelapihash } from "../config";

const getComicdetails = async id => {
  const url = `https://gateway.marvel.com/v1/public${id}/comics?ts=1&apikey=${marvelapikey}&hash=${marvelapihash}`;
  const response = await axios.get(url).catch(console.log(error));
  const data = await response.data.results;
  return data;
};

export default getComicdetails;
