import { handleError } from "@/services/errorService";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const logoutUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      await handleError(response);
    }

    return true;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};
