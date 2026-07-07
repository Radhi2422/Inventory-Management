import axios from "axios";
const API_URL="http://localhost:5001/api/auth";

export const loginUser = async (data) => {
  return await axios.post(
    `${API_URL}/login`,
    data
  );
};