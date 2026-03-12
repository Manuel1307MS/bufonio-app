import { useState } from "react";
import { createComment as createCommentService } from "@/services/commentService";

export const useComment = (tokenChannel) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createComment = async (comment) => {
    if (!comment?.trim()) {
      setError(new Error("El comentario no puede estar vacío"));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createCommentService({ tokenChannel, comment });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createComment, loading, error };
};
