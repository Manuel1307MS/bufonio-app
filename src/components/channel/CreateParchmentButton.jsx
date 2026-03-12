import { useCreateParchment } from "@/hooks/parchment/useCreateParchment";

export const CreateParchmentButton = ({
  tokenChannel,
  setParchmentSummaries,
}) => {
  const { addParchment, loading, error } = useCreateParchment();

  const handleCreate = async () => {
    const newParchment = await addParchment(tokenChannel);

    setParchmentSummaries((prev) => [newParchment, ...prev]);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <button
        onClick={handleCreate}
        disabled={loading}
        className="h-10 w-70 rounded-md bg-black text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Bufonio corre por tinta y pluma..." : "¿Qué dice el reino?"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
