import { useParams } from "react-router-dom";
import { useState, useCallback } from "react";
import { useParchmentByTokenChannelAndIdParchment } from "@/hooks/parchment/useParchmentByTokenChannelAndIdParchment";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";
import { DownIcon } from "@/components/icons/DownIcon";
import { UpIcon } from "@/components/icons/UpIcon";

export const Parchment = ({ idParchment, date, urgencyLevel, title }) => {
  const [open, setOpen] = useState(false);
  const { parchment, loading, error, fetchParchment } =
    useParchmentByTokenChannelAndIdParchment();

  const formattedDate = new Date(date).toLocaleDateString();

  const { tokenChannel } = useParams();

  const toggle = useCallback(async () => {
    const next = !open;
    setOpen(next);

    if (next && !parchment) {
      await fetchParchment(tokenChannel, idParchment);
    }
  }, [open, parchment, idParchment, fetchParchment]);

  const Icon = open ? UpIcon : DownIcon;

  const getBorderColor = (level) => {
    if (level <= 2) return "border-green-500";
    if (level <= 5) return "border-yellow-500";
    if (level <= 8) return "border-orange-500";
    return "border-red-500";
  };

  const borderColorClass = getBorderColor(urgencyLevel);

  return (
    <div
      className={`w-full border-l-4 border-b-2 p-4 bg-white ${borderColorClass}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-6 md:gap-12 font-semibold">
          <div className="text-sm md:text-base">{title}</div>
          <div className="text-sm md:text-base">{formattedDate}</div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={toggle}
            aria-expanded={open}
            className="flex items-center justify-center cursor-pointer"
          >
            <Icon width="20" height="20" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-200 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 text-sm">
          {loading && (
            <div className="flex justify-center">
              <SpinnerIcon />
            </div>
          )}

          {error && <p className="text-center">Error al cargar el pergamino</p>}

          {parchment && (
            <div className="flex flex-col gap-1">
              <p>
                <strong>Comentarios:</strong> {parchment.commentsCount ?? "—"}
              </p>
              <p>
                <strong>Tema dominante:</strong>{" "}
                {parchment.dominantTheme ?? "—"}
              </p>
              <p>
                <strong>Frecuencia:</strong> {parchment.frequency ?? "—"}
              </p>
              <p>
                <strong>Tono emocional:</strong>{" "}
                {parchment.emotionalTone ?? "—"}
              </p>
              <p>
                <strong>Nivel de riesgo:</strong> {parchment.riskLevel ?? "—"}
              </p>
              <p>
                <strong>Patrones detectados:</strong>{" "}
                {parchment.detectedPatterns ?? "—"}
              </p>
              <p>
                <strong>Impactos potenciales:</strong>{" "}
                {parchment.potentialImpacts ?? "—"}
              </p>
              <p>
                <strong>Indicador de monitoreo:</strong>{" "}
                {parchment.monitoringIndicator ?? "—"}
              </p>
              <p>
                <strong>Consejo de Bufonio:</strong>{" "}
                {parchment.bufonioAdvice ?? "—"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
