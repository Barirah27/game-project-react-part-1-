import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "62e7a31376394e39839fa0b947be3627",
  },
});