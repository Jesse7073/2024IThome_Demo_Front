import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30 * 60 * 1000,
  headers: {
    common: {
      Accept: "application/json;charset=utf-8",
      Authorization: null,
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  },
  responseEncoding: "utf8",
  paramsSerializer(params) {
    return qs.stringify(params, { allowDots: true });
  },
});

  http.interceptors.response.use(
    async (response) => {  
      return response;
    },
    async (error) => {
      const _error = error;
  
      if (_error.response) {
        console.log('Error', error.message);
      }
  
      return Promise.reject(_error);
    }
  );
  
  export default http;
  