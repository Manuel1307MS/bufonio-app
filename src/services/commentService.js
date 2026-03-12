import { apiFetch } from "@/services/apiService";

export const createComment = async ({ tokenChannel, comment }) => {
  const response = await apiFetch(
    `/api/channels/${tokenChannel}/comments/public`,
    {
      method: "POST",
      body: JSON.stringify({ comment }),
    },
  );

  if (!response.ok) {
    await handleError(response);
  }
};
