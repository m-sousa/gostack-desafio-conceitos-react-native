import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.230:3334",
});

export default api;
