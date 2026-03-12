import { handleError } from "@/services/errorService";

const urlAPI = import.meta.env.VITE_API_URL;

let currentAccessToken = null;

let isTokenRefreshing = false;
let ongoingRefreshPromise = null;

export const setAccessToken = (token) => {
  currentAccessToken = token;
};

export const clearAccessToken = () => {
  currentAccessToken = null;
};

export const getCredentials = async () => {
  const response = await fetch(`${urlAPI}/api/auth/refresh`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) await handleError(response);

  const data = await response.json();
  return {
    accessToken: data.accessToken,
  };
};

export const apiFetch = async (endpoint, options = {}) => {
  const makeRequest = () =>
    fetch(`${urlAPI}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(currentAccessToken && {
          Authorization: `Bearer ${currentAccessToken}`,
        }),
        ...options.headers,
      },
    });

  let response = await makeRequest();

  if (response.status !== 401) {
    if (!response.ok) await handleError(response);
    return response;
  }

  try {
    if (!isTokenRefreshing) {
      isTokenRefreshing = true;
      ongoingRefreshPromise = getCredentials().finally(() => {
        isTokenRefreshing = false;
      });
    }

    const { accessToken: newAccessToken } = await ongoingRefreshPromise;

    setAccessToken(newAccessToken);

    response = await makeRequest();

    if (!response.ok) await handleError(response);

    return response;
  } catch (err) {
    clearAccessToken();
    throw new Error("No se pudo renovar el token: " + err.message);
  }
};
