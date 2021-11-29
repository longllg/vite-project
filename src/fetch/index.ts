import axios from 'axios'

let apiHost = 'http://localhost:8888';

export const prefixPath = '/';

let gwPrefixPath = apiHost ? '/' + prefixPath : prefixPath;

export const BASE_CONFIG = {
    baseURL: apiHost + gwPrefixPath,
    withCredentials: true,
};

export { apiHost, gwPrefixPath };

export default axios.create(BASE_CONFIG);
