import axios, { AxiosInstance } from "axios"

export default function apiClient(text: string): AxiosInstance {
    
  const defaultOptions = {
    baseURL: "",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  //uncomment below if you want to intercept calls

//   instance.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
//   );

  return instance;
}