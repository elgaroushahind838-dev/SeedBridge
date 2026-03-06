import React from "react";
import "./seedbridge.css";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import MailCheck from "./mail-check.svg";

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <>
      <Background />

      <main className="hero">
        <div className="hero-wrap">
          <section className="hero-card">
            <div className="verify-box">
              <h1 className="verify-h1">Verify your email</h1>

              <div className="verify-circle" aria-hidden="true">
                <img src={MailCheck} alt="Verify email" className="verify-icon" />
              </div>

              <p className="verify-text">
                We&apos;ve sent a verification link to <br />
                <span className="verify-email">alex.v@design.com</span>
              </p>

              <p className="verify-text verify-text--sub">
                Please check your inbox to continue.
              </p>

              <button
                className="verify-btn verify-btn--primary"
                type="button"
                onClick={() => navigate("/login")}
              >
                Resend verification email
              </button>

              <button
                className="verify-btn verify-btn--ghost"
                type="button"
                onClick={() => navigate("/change-email")}
              >
                Change email address
              </button>

              <p className="verify-foot">
                Can’t find the email? Check your spam folder or wait a few minutes
                before trying again.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default VerifyEmail;