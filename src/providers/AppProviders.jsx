import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/providers/AuthProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { SidebarProvider } from "@/providers/SidebarProvider";
import { ChannelProvider } from "@/providers/ChannelProvider";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const AppProviders = ({ children }) => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <ChannelProvider>
        <ModalProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ModalProvider>
      </ChannelProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);
