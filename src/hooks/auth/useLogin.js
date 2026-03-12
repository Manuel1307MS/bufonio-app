import { useState } from "react";
import { loginUser } from "@/services/loginService";
import { setAccessToken } from "@/services/apiService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = await loginUser(formData);
      setAccessToken(data.accessToken);
      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success };
};
