import { AuthProvider } from "@/providers/AuthProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { SidebarProvider } from "@/providers/SidebarProvider";
import { ChannelProvider } from "./ChannelProvider";

export const AppProviders = ({ children }) => (
  <AuthProvider>
    <ChannelProvider>
      <ModalProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ModalProvider>
    </ChannelProvider>
  </AuthProvider>
);
