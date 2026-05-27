import { useEffect, useState } from "react";
import { getChannelsSummaries } from "@/services/channelService";

export const useChannelsSummaries = () => {
  const [summaries, setSummaries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummaries = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getChannelsSummaries();
        setSummaries(data);
      } catch (err) {
        setError(err.message || "Error al obtener ChannelsSummaries");
      } finally {
        setLoading(false);
      }
    };

    fetchSummaries();
  }, []);
  return { summaries, loading, error };
};
