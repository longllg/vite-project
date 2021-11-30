import axios from "axios";

let apiHost = "http://localhost:8888";

export const prefixPath = "/test";

export const BASE_CONFIG = {
  baseURL: apiHost + prefixPath,
  withCredentials: true,
};

export { apiHost };

export default axios.create(BASE_CONFIG);
