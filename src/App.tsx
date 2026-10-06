import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import ActivationModal from "./components/ActivationModal";
import "./App.css";

export default function App() {
  const [isActivationOpen, setIsActivationOpen] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const navigate = useNavigate();

  const handleOpenActivation = (code: string = "") => {
    setActivationCode(code || "KT-7842");
    setIsActivationOpen(true);
  };

  const handleCompleteActivation = (_data?: unknown) => {
    setIsActivationOpen(false);
    navigate("/dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-root">
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar onOpenActivation={handleOpenActivation} />
              <LandingPage onOpenActivation={handleOpenActivation} />
              <Footer onOpenActivation={handleOpenActivation} />
            </>
          }
        />

        {/* Dedicated Login Page at /auth/login */}
        <Route
          path="/auth/login"
          element={<LoginPage onOpenActivation={handleOpenActivation} />}
        />

        {/* Parent Dashboard Page at /dashboard */}
        <Route
          path="/dashboard"
          element={<DashboardPage onOpenActivation={handleOpenActivation} />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <>
              <Navbar onOpenActivation={handleOpenActivation} />
              <LandingPage onOpenActivation={handleOpenActivation} />
              <Footer onOpenActivation={handleOpenActivation} />
            </>
          }
        />
      </Routes>

      {/* Global Interactive Activation Modal */}
      <ActivationModal
        isOpen={isActivationOpen}
        onClose={() => setIsActivationOpen(false)}
        initialCode={activationCode}
        onCompleteActivation={handleCompleteActivation}
      />
    </div>
  );
}
