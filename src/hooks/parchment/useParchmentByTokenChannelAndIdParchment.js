import { useState } from "react";
import { getParchmentByTokenChannelAndIdParchment } from "@/services/parchmentService";

export function useParchmentByTokenChannelAndIdParchment() {
  const [parchment, setParchment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchParchment = async (tokenChannen, idParchment) => {
    if (!idParchment) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getParchmentByTokenChannelAndIdParchment(
        tokenChannen,
        idParchment,
      );
      setParchment(data);
    } catch (err) {
      setError(err.message || "Error al obtener parchment");
    } finally {
      setLoading(false);
    }
  };

  return { parchment, loading, error, fetchParchment };
}
