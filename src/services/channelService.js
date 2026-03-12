import { apiFetch } from "@/services/apiService";
import { handleError } from "@/services/errorService";

export const createChannel = async ({ nameChannel }) => {
  const response = await apiFetch("/api/channels", {
    method: "POST",
    body: JSON.stringify({ nameChannel }),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const getChannels = async () => {
  const response = await apiFetch("/api/channels", {
    method: "GET",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const getChannelByToken = async (tokenChannel) => {
  const response = await apiFetch(`/api/channels/${tokenChannel}`, {
    method: "GET",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return response.json();
};

export const updateChannelByToken = async ({ tokenChannel, channelUpdate }) => {
  const response = await apiFetch(`/api/channels/${tokenChannel}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(channelUpdate),
  });

  return response;
};

export const deleteChannelByToken = async (tokenChannel) => {
  const response = await apiFetch(`/api/channels/${tokenChannel}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    await handleError(response);
  }

  return true;
};
