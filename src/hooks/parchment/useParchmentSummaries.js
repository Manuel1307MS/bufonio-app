import { useState, useEffect } from "react";
import { getParchmentSummaries } from "@/services/parchmentService";

export function useParchmentSummaries(tokenChannel) {
  const [parchmentSummaries, setParchmentSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tokenChannel) return;

    const fetchParchments = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getParchmentSummaries(tokenChannel);
        setParchmentSummaries(data);
      } catch (err) {
        setError(err.message || "Error al obtener parchments");
      } finally {
        setLoading(false);
      }
    };

    fetchParchments();
  }, [tokenChannel]);

  return { parchmentSummaries, setParchmentSummaries, loading, error };
}
