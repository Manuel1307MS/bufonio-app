import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { SidebarLayout } from "@/layouts/SidebarLayout";
import { Channel } from "@/pages/Channel";
import { Comment } from "@/pages/Comment";
import { Settings } from "@/pages/Settings";
import { NotFound } from "@/pages/NotFound";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <SidebarLayout />,
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: "channels/:tokenChannel",
                element: <Channel />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "settings",
                element: <Settings />,
              },
            ],
          },
        ],
      },
      {
        path: "public/login",
        element: <Login />,
      },
      {
        path: "public/register",
        element: <Register />,
      },
      {
        path: "public/channels/:tokenChannel/comments",
        element: <Comment />,
      },
    ],
  },
]);
