import { useState, useRef, useEffect } from "react";

export const DropdownMenu = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center cursor-pointer"
      >
        {trigger}
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-md border border-black/10 bg-white shadow"
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
};
