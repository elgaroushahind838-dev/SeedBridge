// Seedbridge.jsx
import React from "react";
import "./seedbridge.css";
import Background from "./background"; // ✅ component import
import CenterSvg from "./center-graphic.svg";

export const Seedbridge = () => {
  return (
    <>
      <Background />
      <main className="hero">
        <div className="hero-wrap">
          {/* ÜSTTE/OVERLAY SVG */}
          <div className="hero-card__svg" aria-hidden="true">
            <img src={CenterSvg} alt="" />
          </div>

          {/* KART */}
          <section className="hero-card">
            <div className="hero-card__badge">
              Connecting SMAs with trusted investors
            </div>

            <h1 className="hero-card__title">
              We Build The <span className="hero-card__script">Bridges</span>
              <br />
              That Fund SMA Ideas &amp;
              <br />
              Fuel Growth.
            </h1>

            <p className="hero-card__desc">
              SeedBridge is a crowdfunding platform that connects ambitious SMAs
              with trusted investors — turning early ideas into funded, scalable
              ventures.
            </p>

            <div className="hero-card__actions">
              <button className="hero-btn hero-btn--primary">
                Join as Investor
              </button>
              <button className="hero-btn hero-btn--ghost">Join as SMA</button>
            </div>

            <div className="hero-card__foot">
              <p className="hero-card__footStrong">
                Your role defines your experience on SeedBridge.
              </p>
              <p className="hero-card__footSoft">
                Please choose carefully — this role cannot be changed later.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Seedbridge;