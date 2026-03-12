import React, { useState, useEffect } from "react";
import { ChannelContext } from "@/contexts/ChannelContext";
import { getChannels } from "@/services/channelService";
import { useAuth } from "@/hooks/auth/useAuth";

export const ChannelProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { auth, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading || !auth.accessToken) return;

    const fetchChannels = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getChannels();
        setChannels(data);
      } catch (err) {
        setError(err.message || "Error al obtener canales");
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, [auth.accessToken, authLoading]);

  return (
    <ChannelContext.Provider value={{ channels, setChannels, loading, error }}>
      {children}
    </ChannelContext.Provider>
  );
};
