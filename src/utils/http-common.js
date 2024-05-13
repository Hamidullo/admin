import axios from "axios";
import url from "@/utils/url";

export default axios.create({
  baseURL: url.baseURL+"/api", //GHYe]ZlITnWS
  headers: {
    "Content-type": "application/json"
  }
});
