import { useUserSummary } from "@/hooks/user/useUserSummary";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";
import { ChannelSummaryList } from "@/components/channel/ChannelSummaryList";

export const Home = () => {
  const { userSummary, loading, error } = useUserSummary();

  return (
    <main className="h-full p-6 md:p-16 flex flex-col overflow-y-auto custom-scroll gap-6">
      <div className="flex flex-col bg-white border border-black/10 rounded-2xl p-8 mb-8">
        {loading && (
          <div className="flex justify-center">
            <SpinnerIcon />
          </div>
        )}

        {error && <p className="text-center">Error al cargar el usuario.</p>}

        {userSummary && (
          <div>
            <h1 className="text-6xl font-semibold mb-3">HOLA</h1>
            <h2 className="text-4xl">{userSummary.nameUser ?? "-"}</h2>
          </div>
        )}
      </div>

      <ChannelSummaryList />
    </main>
  );
};
