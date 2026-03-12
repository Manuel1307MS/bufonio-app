import { useState, useEffect } from "react";
import { getChannelByToken } from "@/services/channelService";

export function useChannelByToken(tokenChannel) {
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tokenChannel) return;

    const fetchChannel = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getChannelByToken(tokenChannel);
        setChannel(data);
      } catch (err) {
        setError(err.message || "Error al obtener canal por token");
      } finally {
        setLoading(false);
      }
    };

    fetchChannel();
  }, [tokenChannel]);

  return { channel, loading, error };
}
