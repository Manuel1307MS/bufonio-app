import { useEffect, useRef, useState } from "react";

export const SidebarCreateChannelInput = ({ onCreate, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        const name = inputValue.trim();

        if (name === "") {
          setInputValue("");
          onClose();
        } else {
          handleCreate(name);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputValue]);

  const handleCreate = async (name) => {
    if (!name.trim()) {
      setInputValue("");
      onClose();
      return;
    }

    await onCreate(name);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreate(inputValue);
    }

    if (e.key === "Escape") {
      setInputValue("");
      onClose();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Nombre del canal..."
      className="w-full block items-center transition py-1.5 px-3 text-base focus:outline-none"
    />
  );
};
