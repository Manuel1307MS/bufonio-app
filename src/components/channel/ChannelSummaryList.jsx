import { useChannelsSummaries } from "@/hooks/channel/useChannelsSummaries";
import { ChannelSummaryCard } from "@/components/channel/ChannelSummaryCard";
import { SpinnerIcon } from "../icons/SpinnerIcon";

export const ChannelSummaryList = () => {
  const { summaries, loading, error } = useChannelsSummaries();

  if (loading)
    return (
      <div className="flex justify-center">
        <SpinnerIcon />
      </div>
    );
  if (error)
    return <div className="text-center">Error al cargar los canales.</div>;
  if (!summaries || summaries.length === 0)
    return <div className="p-8 text-center text-black/50">No hay canales.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {summaries.map((channel) => (
        <ChannelSummaryCard
          key={channel.idChannel}
          idChannel={channel.idChannel}
          nameChannel={channel.nameChannel}
          averageUrgency={channel.averageUrgency}
        />
      ))}
    </div>
  );
};
