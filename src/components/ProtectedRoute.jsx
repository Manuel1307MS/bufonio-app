import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/auth/useAuth";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-65px)] w-full justify-center items-center">
        <SpinnerIcon />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/public/login" replace />;
  }

  return <Outlet />;
};
