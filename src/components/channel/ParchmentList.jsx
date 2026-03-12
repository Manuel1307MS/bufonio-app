import { SpinnerIcon } from "@/components/icons/SpinnerIcon";
import { Parchment } from "@/components/Parchment";

export const ParchmentList = ({ parchments, loading, error }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <span className="text-xl font-semibold tracking-tight">Pergaminos</span>

      {loading && (
        <div className="flex justify-center">
          <SpinnerIcon />
        </div>
      )}

      {error && <p>Error al cargar pergaminos</p>}

      {!loading && !error && parchments.length === 0 && (
        <p className="text-black/50">No hay parchments disponibles</p>
      )}

      {parchments.map((p) => (
        <Parchment
          key={p.idParchment}
          idParchment={p.idParchment}
          date={p.createdAt}
          urgencyLevel={p.urgencyLevel}
          title={p.bufonioMessage}
        />
      ))}
    </div>
  );
};
