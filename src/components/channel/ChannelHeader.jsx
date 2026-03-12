import { useState, useEffect } from "react";
import { useUpdateChannelByToken } from "@/hooks/channel/useUpdateChannelByToken";
import { useChannels } from "@/hooks/channel/useChannels";
import { ChannelSettingsMenu } from "./ChannelSettingsMenu";

export const ChannelHeader = ({ channel, tokenChannel }) => {
  const { setChannels } = useChannels();
  const { updateChannel, loading } = useUpdateChannelByToken();

  const [editingName, setEditingName] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    if (channel?.nameChannel) {
      setChannelName(channel.nameChannel);
    }
  }, [channel]);

  const handleUpdateChannel = async () => {
    const newName = nameValue.trim();

    if (!newName || newName === channelName) {
      setEditingName(false);
      return;
    }

    try {
      await updateChannel(tokenChannel, newName);

      setChannelName(newName);

      setChannels((prev) =>
        prev.map((c) =>
          c.tokenChannel === tokenChannel ? { ...c, nameChannel: newName } : c,
        ),
      );
    } finally {
      setEditingName(false);
    }
  };

  return (
    <header className="mb-5 grid grid-cols-[1fr_auto] items-center gap-2">
      {editingName ? (
        <input
          autoFocus
          value={nameValue}
          disabled={loading}
          onChange={(e) => setNameValue(e.target.value)}
          onBlur={handleUpdateChannel}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdateChannel();
            if (e.key === "Escape") {
              setEditingName(false);
              setNameValue(channelName);
            }
          }}
          className="w-full text-2xl font-semibold tracking-tight border-b border-black focus:outline-none"
        />
      ) : (
        <h1 className="truncate text-2xl font-semibold tracking-tight">
          {channelName}
        </h1>
      )}

      <ChannelSettingsMenu
        tokenChannel={tokenChannel}
        channelName={channelName}
        setEditingName={setEditingName}
        setNameValue={setNameValue}
      />
    </header>
  );
};
