import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";

export const LoginGoogle = ({ setAuth }) => {
  const { loginGoogle, loading, error: serverError } = useLogin();
  const [googleError, setGoogleError] = useState(null);
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    const data = await loginGoogle(credentialResponse.credential);

    if (data) {
      setAuth({ accessToken: data.accessToken, user: data.userDTO });
      navigate("/");
    }
  };

  const handleError = () => {
    setGoogleError("Google error");
  };

  const error = serverError || googleError;

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        theme="outline"
        size="large"
        width="100%"
        text="continue_with"
        shape="rectangular"
        disabled={loading}
      />
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};
