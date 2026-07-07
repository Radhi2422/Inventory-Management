import axios from "axios";
const REACT_APP_API_URL=process.env.REACT_APP_API_URL;

export const loginUser = async (data) => {
  return await axios.post(
    `${REACT_APP_API_URL}/login`,
    data
  );
};
