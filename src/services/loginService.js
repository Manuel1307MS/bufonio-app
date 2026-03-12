import { handleError } from "@/services/errorService";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};
