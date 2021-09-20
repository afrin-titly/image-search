import axios from 'axios'

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
    headers: {
        Authorization: "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"
    }
  };
  
  const _axios = axios.create(config);
  export default _axios;