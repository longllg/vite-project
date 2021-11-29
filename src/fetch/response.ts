import axios from 'axios';
import { apiHost } from './index';

let gwPrefixPath = '/';

export const BASE_CONFIG = {
    baseURL: apiHost + gwPrefixPath,
    withCredentials: true,
};

const axiosFetch = axios.create(BASE_CONFIG);

axiosFetch.interceptors.response.use(function (response: any) {
    if (response.data.code !== 2000) {
        return Promise.reject(
            '23333333'
        );
    }
    return response;
});

export default axiosFetch;
