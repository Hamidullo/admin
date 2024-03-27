import axios from "axios";

export default axios.create({
  baseURL: "https://api.nammti.uz/api", //GHYe]ZlITnWS
  headers: {
    "Content-type": "application/json"
  }
});
