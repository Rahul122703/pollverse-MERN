import axios from "axios";

export const googleAuth = async (code) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
    {
      code,
    }
  );
  return res.data;
};
