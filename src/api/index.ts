import axiosFetch from "src/fetch/response";

export const getData = () => {
    return axiosFetch.post('/')
}