import { useState } from "react";
import { useRegister } from "@/hooks/auth/useRegister";
import { Link } from "react-router-dom";

export const Register = () => {
  const { register, loading, error, success } = useRegister();

  const [formData, setFormData] = useState({
    nameUser: "",
    emailUser: "",
    passwordUser: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100dvh-65px)]">
      <div className="w-full max-w-100 space-y-6 md:border md:border-black/10 md:rounded-xl bg-white p-8">
        <div className="flex flex-col space-y-1.5">
          <h2 className="text-2xl font-semibold tracking-tight">Registro</h2>
          <p className="text-sm text-black/50">Introduce tus datos.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Nombre</label>
            <input
              type="text"
              name="nameUser"
              value={formData.nameUser}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm placeholder:text-black/50 focus-visible:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Email</label>
            <input
              type="email"
              name="emailUser"
              placeholder="ejemplo@email.com"
              value={formData.emailUser}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm placeholder:text-black/50 focus-visible:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Contraseña
            </label>
            <input
              type="password"
              name="passwordUser"
              value={formData.passwordUser}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm placeholder:text-black/50 focus-visible:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Registrarse"}
          </button>

          {error && (
            <p className="text-[0.8rem] font-medium text-primary text-center">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm font-medium text-green-600 text-center">
              Usuario registrado correctamente
            </p>
          )}

          <div className="text-center">
            <Link
              to="/public/login"
              className="text-sm font-medium leading-none"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
