import { useState } from "react";
import { deleteChannelByToken } from "@/services/channelService";

export function useDeleteChannelByToken() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeChannel = async (tokenChannel) => {
    setLoading(true);
    setError(null);

    try {
      await deleteChannelByToken(tokenChannel);
      return true;
    } catch (err) {
      setError(err.message || "Error al eliminar canal");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { removeChannel, loading, error };
}
