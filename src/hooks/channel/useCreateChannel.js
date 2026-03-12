import { useState } from "react";
import { createChannel } from "@/services/channelService";

export function useCreateChannel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addChannel = async (nameChannel) => {
    setLoading(true);
    setError(null);

    try {
      const newChannel = await createChannel({ nameChannel });
      return newChannel;
    } catch (err) {
      setError(err.message || "Error al crear canal");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { addChannel, loading, error };
}
