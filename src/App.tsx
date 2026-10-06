import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import TagsPage from "./pages/dashboard/tags";
import ChildrenPage from "./pages/dashboard/children";
import MapPage from "./pages/dashboard/map";
import ContactsPage from "./pages/dashboard/contacts";
import MedicalPage from "./pages/dashboard/medical";
import SettingsPage from "./pages/dashboard/settings";
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

        {/* Auth Pages with Common Layout */}
        <Route
          path="/auth"
          element={<AuthLayout onOpenActivation={handleOpenActivation} />}
        >
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Direct URL shortcuts */}
        <Route path="/login" element={<Navigate to="/auth/login" replace />} />
        <Route path="/register" element={<Navigate to="/auth/register" replace />} />

        {/* Parent Dashboard with Common Layout */}
        <Route
          path="/dashboard"
          element={<DashboardLayout onOpenActivation={handleOpenActivation} />}
        >
          <Route
            index
            element={<DashboardPage onOpenActivation={handleOpenActivation} />}
          />
          <Route
            path="tags"
            element={<TagsPage onOpenActivation={handleOpenActivation} />}
          />
          <Route
            path="children"
            element={<ChildrenPage onOpenActivation={handleOpenActivation} />}
          />
          <Route path="map" element={<MapPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="medical" element={<MedicalPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

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
