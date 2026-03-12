import { useModal } from "@/hooks/modal/useModal";
import { ModalConfirmBase } from "@/components/modals/ModalConfirmBase";

export const useConfirmModal = () => {
  const { openModal, closeModal } = useModal();

  const confirm = (options) => {
    return new Promise((resolve) => {
      const handleConfirm = () => {
        resolve(true);
        closeModal();
      };

      const handleCancel = () => {
        resolve(false);
        closeModal();
      };

      openModal(
        <ModalConfirmBase
          {...options}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />,
      );
    });
  };

  return { confirm };
};
