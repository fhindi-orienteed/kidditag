import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { WebsiteContextType } from "./websiteContext";

interface WebsiteLayoutProps {
  onOpenActivation?: (code?: string) => void;
}

export default function WebsiteLayout({ onOpenActivation }: WebsiteLayoutProps) {
  const contextValue: WebsiteContextType = {
    onOpenActivation,
  };

  return (
    <div className="website-layout-shell">
      <Navbar onOpenActivation={onOpenActivation ? () => onOpenActivation() : undefined} />
      <main className="website-main-outlet">
        <Outlet context={contextValue} />
      </main>
      <Footer onOpenActivation={onOpenActivation ? () => onOpenActivation() : undefined} />
    </div>
  );
}
