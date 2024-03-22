import axios from "axios";

export default axios.create({
  baseURL: "http://172.16.10.3:3002/api",
  headers: {
    "Content-type": "application/json"
  }
});
