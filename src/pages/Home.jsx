import { useUserSummary } from "@/hooks/user/useUserSummary";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";

export const Home = () => {
  const { userSummary, loading, error } = useUserSummary();

  return (
    <div className="h-full p-6 md:p-16">
      <div className="flex flex-col bg-white border border-black/10 rounded-2xl p-8 mb-8">
        {loading && (
          <div className="flex justify-center">
            <SpinnerIcon />
          </div>
        )}

        {error && <p>Error al cargar el usuario</p>}

        {userSummary && (
          <div>
            <h1 className="text-6xl font-semibold mb-3">HOLA</h1>
            <h2 className="text-4xl">{userSummary.nameUser ?? "-"}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
