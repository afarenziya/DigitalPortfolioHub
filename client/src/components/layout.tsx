import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton phoneNumber="+919315869313" />
      <ScrollToTop />
    </div>
  );
};