import { useState } from "react";
import { PencilIcon } from "@/components/icons/PencilIcon";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";

import { useChannels } from "@/hooks/channel/useChannels";
import { useCreateChannel } from "@/hooks/channel/useCreateChannel";

import { SidebarChannelLink } from "./SidebarChannelLink";
import { SidebarCreateChannelInput } from "./SidebarCreateChannelInput";

import { useNavigate } from "react-router-dom";

export const SidebarChannelSection = () => {
  const [showInput, setShowInput] = useState(false);

  const { channels, setChannels, loading, error } = useChannels();

  const navigate = useNavigate();

  const {
    addChannel,
    loading: creating,
    error: createError,
  } = useCreateChannel();

  const handleCreateChannel = async (nameChannel) => {
    try {
      const newChannel = await addChannel(nameChannel);

      setChannels((prev) => [newChannel, ...prev]);

      navigate(`/channels/${newChannel.tokenChannel}`);
    } catch (err) {
      console.error("Error creando canal:", err.message);
    } finally {
      setShowInput(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowInput(true)}
        className="cursor-pointer w-full flex items-center rounded-md hover:bg-black/5 transition py-1.5 px-3 text-base font-medium gap-1"
      >
        <PencilIcon width="20" height="20" />
        Nuevo canal
      </button>

      <hr className="my-2 border-black/10" />

      {(loading || creating) && (
        <div className="flex justify-center items-center">
          <SpinnerIcon />
        </div>
      )}

      {(error || createError) && (
        <p className="text-xs px-2 flex justify-center items-center">
          {error ? "Error al cargar canales" : "Error al crear canal"}
        </p>
      )}

      <section className="flex-1 flex flex-col overflow-y-auto min-h-0 custom-scroll">
        {showInput && (
          <div className="shrink-0">
            <SidebarCreateChannelInput
              onCreate={handleCreateChannel}
              onClose={() => setShowInput(false)}
            />
          </div>
        )}

        {channels.map((channel) => (
          <div key={channel.idChannel} className="shrink-0">
            <SidebarChannelLink channel={channel} />
          </div>
        ))}
      </section>
    </>
  );
};
