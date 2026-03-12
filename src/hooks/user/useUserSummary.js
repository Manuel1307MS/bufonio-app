import { useState, useEffect } from "react";
import { getUserSummary } from "@/services/userService";

export function useUserSummary() {
  const [userSummary, setUserSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserSummary = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getUserSummary();
        setUserSummary(data);
      } catch (err) {
        setError(err.message || "Error al obtener el resumen del usuario");
      } finally {
        setLoading(false);
      }
    };

    fetchUserSummary();
  }, []);

  return { userSummary, loading, error };
}
