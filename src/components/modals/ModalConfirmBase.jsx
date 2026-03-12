export const ModalConfirmBase = ({
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  icon: Icon,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{title}</h2>

      {description && <p className="text-sm text-black/60">{description}</p>}

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={onCancel}
          className="inline-flex h-10 w-full items-center justify-center rounded-md hover:bg-black/5 px-4 py-2 text-sm font-medium cursor-pointer"
        >
          {cancelText}
        </button>

        <button
          onClick={onConfirm}
          className="inline-flex gap-1 h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/20 transition-colors cursor-pointer"
        >
          {Icon && <Icon width={20} height={20} />}
          {confirmText}
        </button>
      </div>
    </div>
  );
};
