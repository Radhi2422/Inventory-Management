import axios from "axios";

const useAdd = () => {
  const add = async ({
    endpoint,
    data,
    successMessage,
    errorMessage,
    resetForm,
  }) => {
    try {
      const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
      // const token = localStorage.getItem("token");

      await axios.post(
        `${VITE_BASE_URL}${endpoint}`,
        data
      );

      alert(successMessage);

      if (resetForm) {
        resetForm();
      }

      return true;
    } catch (error) {
      alert(errorMessage);
      console.error(error);
      return false;
    }
  };

  return { add };
};

export default useAdd;