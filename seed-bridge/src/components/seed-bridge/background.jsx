import React from "react";
import "./background.css";
import RightSvg from "./right-shape2.svg";

export default function Background() {
  return (
   <div className="sb-bg" aria-hidden="true">
      <div className="sb-bg__base" />
      <div className="sb-bg__leftGlow" />
      <div className="sb-bg__grid" />
      <div className="sb-bg__vignette" />

    <div className="bg-right">
        <img src={RightSvg} alt="" />
      </div>
    </div>
  );
}