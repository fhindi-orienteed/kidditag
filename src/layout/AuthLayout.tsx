import { Outlet, Link } from "react-router-dom";
import { ShieldCheck, Sparkles } from "lucide-react";
import LoginPageDetails from "../pages/auth/details";
import type { AuthContextType } from "../pages/auth/context";

interface AuthLayoutProps {
  onOpenActivation?: () => void;
}

export default function AuthLayout({ onOpenActivation }: AuthLayoutProps) {
  const contextValue: AuthContextType = {
    onOpenActivation,
  };

  return (
    <div className="login-page-wrapper">
      {/* Main Login Grid */}
      <div className="login-main-container">
        <div className="login-grid">
          {/* Left Column: Form Card */}
          <div className="login-card-container">
            <div className="login-card">
              {/* Brand and Portal Badge Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <Link to="/" className="nav-brand" style={{ gap: 8 }}>
                  <div
                    className="brand-icon-box"
                    style={{ width: 34, height: 34 }}
                  >
                    <ShieldCheck size={18} strokeWidth={2.4} />
                  </div>
                  <span className="brand-name" style={{ fontSize: "1.2rem" }}>
                    KiddieTag
                  </span>
                </Link>

                <div
                  className="section-pill purple"
                  style={{ marginBottom: 12 }}
                >
                  <Sparkles size={13} />
                  <span>CAREGIVER PORTAL</span>
                </div>
              </div>

              {/* Dynamic Child Route (Login, Register, etc.) */}
              <Outlet context={contextValue} />

              {/* Tag Activation Quick Link */}
              <div className="login-card-footer">
                <p>
                  Have a new physical tag?{" "}
                  <button
                    type="button"
                    className="link-highlight"
                    onClick={() => {
                      if (onOpenActivation) onOpenActivation();
                    }}
                  >
                    Activate without logging in →
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Peace of Mind Panel */}
          <LoginPageDetails />
        </div>
      </div>
    </div>
  );
}
