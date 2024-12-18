"use client";
import React from "react";
import ReactLenis from "@studio-freight/react-lenis";

const Lenis = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Lenis;