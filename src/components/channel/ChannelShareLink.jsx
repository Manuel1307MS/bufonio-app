import { useState } from "react";
import { CopyIcon } from "@/components/icons/CopyIcon";
import { CopyCheckIcon } from "@/components/icons/CopyCheckIcon";

export const ChannelShareLink = ({ tokenChannel }) => {
  const [copied, setCopied] = useState(false);

  const urlApp = import.meta.env.VITE_APP_URL;
  const link = `${urlApp}/public/channels/${tokenChannel}/comments`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <p className="text-sm text-black/50">
        Comparte el siguiente enlace con tu equipo
      </p>

      <div className="flex items-center gap-2">
        <output className="text-sm md:text-lg font-medium break-all">
          {link}
        </output>

        <button className="cursor-pointer" onClick={handleCopy}>
          {copied ? (
            <CopyCheckIcon width={20} height={20} />
          ) : (
            <CopyIcon width={20} height={20} />
          )}
        </button>
      </div>
    </>
  );
};
