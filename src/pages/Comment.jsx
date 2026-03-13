import { useState } from "react";
import { useParams } from "react-router-dom";
import { useComment } from "@/hooks/useComment";

export const Comment = () => {
  const { tokenChannel } = useParams();
  const [comment, setComment] = useState("");

  const { createComment, loading, error } = useComment(tokenChannel);

  const MAX_LENGTH = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComment(comment);
      setComment("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-[calc(100dvh-65px)] bg-white flex items-center justify-center p-4">
      <div className="p-8 md:border md:border-black/10 md:rounded-xl w-full max-w-lg flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            ¡Exprésate!
          </h1>
          <p className="text-sm text-black/50">
            Comparte tus comentarios, ideas o sugerencias.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe aquí lo que quieras compartir..."
            required
            className="border border-black/10 rounded-xl p-4 resize-none h-48 w-full focus:outline-none placeholder-black/50 custom-scroll"
          />

          <p
            className={`text-sm text-right ${
              comment.length > MAX_LENGTH ? "text-red-500" : "text-black/50"
            }`}
          >
            {comment.length} / {MAX_LENGTH} caracteres
          </p>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading || comment.length > MAX_LENGTH}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
};
