import { useParams } from "react-router-dom";
import { useChannelByToken } from "@/hooks/channel/useChannelByToken";
import { useParchmentSummaries } from "@/hooks/parchment/useParchmentSummaries";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";

import { ChannelHeader } from "@/components/channel/ChannelHeader";
import { ChannelShareLink } from "@/components/channel/ChannelShareLink";
import { CreateParchmentButton } from "@/components/channel/CreateParchmentButton";
import { ParchmentList } from "@/components/channel/ParchmentList";

export const Channel = () => {
  const { tokenChannel } = useParams();

  const {
    channel,
    loading: channelLoading,
    error: channelError,
  } = useChannelByToken(tokenChannel);

  const {
    parchmentSummaries,
    setParchmentSummaries,
    loading: parchmentsLoading,
    error: parchmentsError,
  } = useParchmentSummaries(tokenChannel);

  if (channelLoading) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <SpinnerIcon />
      </div>
    );
  }

  if (channelError) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <p>No se pudo cargar este canal.</p>
      </div>
    );
  }

  return (
    <main className="h-full p-6 md:p-16 flex flex-col overflow-y-auto custom-scroll gap-12">
      <article>
        <ChannelHeader tokenChannel={tokenChannel} channel={channel} />

        <ChannelShareLink tokenChannel={tokenChannel} />
      </article>

      <CreateParchmentButton
        tokenChannel={tokenChannel}
        setParchmentSummaries={setParchmentSummaries}
      />

      <ParchmentList
        parchments={parchmentSummaries}
        loading={parchmentsLoading}
        error={parchmentsError}
      />
    </main>
  );
};
