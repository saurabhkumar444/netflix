import axios from "axios";

const ApiGenerator = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default ApiGenerator;
