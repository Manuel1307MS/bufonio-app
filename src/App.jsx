import { RouterProvider } from "react-router-dom";
import { router } from "@/router/router.jsx";

export const App = () => {
  return <RouterProvider router={router} />;
};
