import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 2000
});

// show req config or error before api access it
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// show res config or error before front-end access it
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

const createApi = () => {
  return {

  }
}

export default createApi;
