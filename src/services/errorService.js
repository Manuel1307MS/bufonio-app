export const handleError = async (response) => {
  let errorData = {};
  try {
    errorData = await response.json();
  } catch {}

  const errorMessage = errorData.message || "Error desconocido";
  throw new Error(errorMessage);
};
