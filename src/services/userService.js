import { apiFetch } from "@/services/apiService";
import { handleError } from "@/services/errorService";

export const getUser = async () => {
  const response = await apiFetch("/api/users/me", {
    method: "GET",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const getUserSummary = async () => {
  const response = await apiFetch("/api/users/me/summary", {
    method: "GET",
  });

  if (!response) {
    await handleError(response);
  }

  return response.json();
};
