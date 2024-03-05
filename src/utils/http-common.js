import axios from "axios";

export default axios.create({
  baseURL: "http://api.nammti.uz/api",
  headers: {
    "Content-type": "application/json"
  }
});
