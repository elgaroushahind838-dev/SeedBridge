import React, { useMemo, useState } from "react";
import "./seedbridge.css";
import Background from "./background";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const emailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  );

  const canSubmit = emailValid;

const onSubmit = (e) => {
  e.preventDefault();
  if (!canSubmit) return;

  navigate("/set-new-password");
};

  return (
    <>
      <Background />

      <main className="hero">
        <div className="hero-wrap">
          <section className="hero-card">

            <h1 className="sma-h1" style={{ marginTop: "20px" }}>Forgot your password?</h1>

            <h4 className="login-h4">
              No worries. Enter your email address and we’ll send you a link to reset your password.
            </h4>

            <form className="sma-form" onSubmit={onSubmit} noValidate>

              <label className="sma-label">
                <span className="sma-label-text">
                  Email Address <span className="sma-star">*</span>
                </span>

                <input
                  className={`sma-input ${
                    email.length > 0 && !emailValid ? "is-error" : ""
                  }`}
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button
                className="sma-submit"
                type="submit"
                disabled={!canSubmit}
              >
                Send reset link
              </button>

              <button
                type="button"
                className="back-login"
                onClick={() => navigate("/login")}
              >
                Back to log in
              </button>

              <p className="login-foot">
                Make sure to check your spam folder if you don't see the email.
              </p>

            </form>

          </section>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;