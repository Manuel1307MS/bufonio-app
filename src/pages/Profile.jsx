import { useUser } from "@/hooks/user/useUser";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";
import { useConfirmModal } from "@/hooks/modal/useConfirmModal";
import { useLogout } from "@/hooks/auth/useLogout";
import { OutIcon } from "@/components/icons/OutIcon";

export const Profile = () => {
  const { user, loading: userLoading, error: userError } = useUser();
  const { confirm } = useConfirmModal();
  const { logout } = useLogout();

  const urlLanding = import.meta.env.VITE_LANDING_URL;

  const handleLogout = async () => {
    const ok = await confirm({
      title: "Cerrar sesión",
      description: "¿Seguro que deseas cerrar sesión?",
      confirmText: "Cerrar sesión",
      icon: OutIcon,
    });

    if (!ok) return;

    await logout();
    window.location.href = urlLanding;
  };

  return (
    <div className="h-full p-6 md:p-16">
      <div className="flex flex-col bg-white border border-black/10 rounded-2xl p-8 mb-8 gap-4">
        {userLoading && (
          <div className="flex justify-center">
            <SpinnerIcon />
          </div>
        )}

        {userError && <p>Error al cargar el usuario</p>}

        {user && (
          <div className="flex flex-col gap-4">
            <div>
              <span>Nombre de usuario:</span>
              <p>{user.nameUser}</p>
            </div>

            <div>
              <span>Email:</span>
              <p>{user.emailUser}</p>
            </div>
          </div>
        )}

        <div>
          <button
            onClick={handleLogout}
            className="inline-flex gap-1 h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/20 transition-colors cursor-pointer"
          >
            <OutIcon width={20} height={20} />
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
