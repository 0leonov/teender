import axios from 'axios'

export const API_URL = 'http://localhost:80/api/'

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  error => {
    return Promise.reject(error)
  }
)


// instance.interceptors.response.use(
//   (response) => {
//     if (response.data.error) {
//       axios.post(API_URL + '123')
//         .then(data => {
//           // error.config.headers.Authorization = `Bearer ${data.accessToken}`;
//           // return axios.request(error.config);
//         })
//     }

//     return response;
//   }
// );

export default instance
