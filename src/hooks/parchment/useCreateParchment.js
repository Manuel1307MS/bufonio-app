import { useState } from "react";
import { createParchment } from "@/services/parchmentService";

export function useCreateParchment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addParchment = async (tokenChannel) => {
    setLoading(true);
    setError(null);
    try {
      const newParchment = await createParchment(tokenChannel);
      return newParchment;
    } catch (err) {
      setError(err.message || "Error al crear parchment");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { addParchment, loading, error };
}
