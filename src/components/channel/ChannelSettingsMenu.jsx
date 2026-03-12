import { DropdownMenu } from "@/components/DropdownMenu";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { useConfirmModal } from "@/hooks/modal/useConfirmModal";
import { useDeleteChannelByToken } from "@/hooks/channel/useDeleteChannelByToken";
import { useChannels } from "@/hooks/channel/useChannels";
import { useNavigate } from "react-router-dom";

export const ChannelSettingsMenu = ({
  tokenChannel,
  channelName,
  setEditingName,
  setNameValue,
}) => {
  const { confirm } = useConfirmModal();
  const { removeChannel } = useDeleteChannelByToken();
  const { setChannels } = useChannels();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const ok = await confirm({
      title: "Eliminar canal",
      description: "Esta acción no se puede deshacer.",
      confirmText: "Eliminar",
      icon: TrashIcon,
    });

    if (!ok) return;

    await removeChannel(tokenChannel);

    setChannels((prev) => prev.filter((c) => c.tokenChannel !== tokenChannel));

    navigate("/");
  };

  return (
    <DropdownMenu trigger={<SettingsIcon width={28} height={28} />}>
      <ul className="p-2 text-sm">
        <li>
          <button
            onClick={() => {
              setNameValue(channelName);
              setEditingName(true);
            }}
            className="w-full text-left px-4 py-2 hover:bg-black/5 rounded-md cursor-pointer"
          >
            Editar canal
          </button>
        </li>

        <hr className="my-2 border-black/10" />

        <li>
          <button
            onClick={handleDelete}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-500/20 rounded-md flex gap-1 items-center cursor-pointer"
          >
            <TrashIcon width={20} height={20} />
            Eliminar canal
          </button>
        </li>
      </ul>
    </DropdownMenu>
  );
};
