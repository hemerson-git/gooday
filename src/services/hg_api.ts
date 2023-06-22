import axios from "axios";

export const hgAPI = axios.create({
  baseURL: "https://api.hgbrasil.com",
});
