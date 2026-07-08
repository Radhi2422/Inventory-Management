import axios from "axios";
 const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL
      
const api = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`
});

export default api;