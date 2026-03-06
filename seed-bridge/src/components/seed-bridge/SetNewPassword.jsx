import React, { useState } from "react";
import "./seedbridge.css";
import Background from "./background";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const passValid = pass.length >= 8;
  const confirmValid = confirm.length > 0 && confirm === pass;

  const canSubmit = passValid && confirmValid;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

 navigate("/password-reset-success");
  };

  return (
    <>
      <Background />
      <main className="hero">
        <div className="hero-wrap">
          <section className="hero-card">

            <h1 className="sma-h1"style={{ marginTop: "20px" }}>Set a new password</h1>

            <h4 className="login-h4">
              Choose a strong password to secure your account.
            </h4>

            <form className="sma-form" onSubmit={onSubmit} noValidate>
              <label className="sma-label">
                <span className="sma-label-text">
                  Password <span className="sma-star">*</span>
                </span>

                <input
                  className={`sma-input ${pass.length > 0 && !passValid ? "is-error" : ""}`}
                  type="password"
                  placeholder="**********"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />

                <div className="sma-hint">Minimum 8 characters</div>
              </label>

              <label className="sma-label">
                <span className="sma-label-text">
                  Confirm Password <span className="sma-star">*</span>
                </span>

                <input
                  className={`sma-input ${confirm.length > 0 && !confirmValid ? "is-error" : ""}`}
                  type="password"
                  placeholder="**********"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </label>

              <button
                className="sma-submit"
                type="submit"
                disabled={!canSubmit}
              >
                Update password
              </button>

              <button
                type="button"
                className="back-login"
                onClick={() => navigate("/login")}
              >
                Back to log in
              </button>

              <p className="login-foot">
                For your security, this link can only be used once.
              </p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default SetNewPassword;