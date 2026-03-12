import { apiFetch } from "@/services/apiService";

export const createParchment = async (tokenChannel) => {
  const response = await apiFetch(`/api/channels/${tokenChannel}/parchments`, {
    method: "POST",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const getParchmentSummaries = async (tokenChannel) => {
  const response = await apiFetch(`/api/channels/${tokenChannel}/parchments`, {
    method: "GET",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const getParchmentByTokenChannelAndIdParchment = async (
  tokenChannel,
  idParchment,
) => {
  const response = await apiFetch(
    `/api/channels/${tokenChannel}/parchments/${idParchment}`,
    {
      method: "GET",
    },
  );

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};
