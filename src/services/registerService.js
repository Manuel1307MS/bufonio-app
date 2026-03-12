import { handleError } from "@/services/errorService";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};
