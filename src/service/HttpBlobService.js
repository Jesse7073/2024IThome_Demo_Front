import axios from "axios";

const blobHttpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3 * 60 * 1000,
  headers: {
    common: {
      Accept: "application/octet-stream",
    },
  },
  responseType: "arraybuffer",
});

blobHttpClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    /* eslint no-underscore-dangle: ["error", { "allow": [_error] }] */
    const _error = error;
    if (!_error.response) {
      console.log('Error', error.message);
    }

    return Promise.reject(_error);
  }
);

export default blobHttpClient;
