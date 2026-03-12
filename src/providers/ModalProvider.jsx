import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "@/contexts/ModalContext";

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const openModal = (component) => setModal(component);
  const closeModal = () => setModal(null);

  const value = useMemo(() => ({ openModal, closeModal }), []);

  return (
    <ModalContext.Provider value={value}>
      {children}

      {modal &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-xl shadow-xl w-full sm:w-96 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {modal}
            </div>
          </div>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};
