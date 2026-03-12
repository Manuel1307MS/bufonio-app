import { useState } from "react";
import { updateChannelByToken } from "@/services/channelService";

export function useUpdateChannelByToken() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateChannel = async (tokenChannel, nameChannel) => {
    setLoading(true);
    setError(null);

    try {
      const updatedChannel = await updateChannelByToken({
        tokenChannel,
        channelUpdate: { nameChannel },
      });

      return updatedChannel;
    } catch (err) {
      setError(err.message || "Error al actualizar canal");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateChannel, loading, error };
}
