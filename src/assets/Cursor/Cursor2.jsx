// src/Cursor2.jsx

"use client";

import { useRef } from "react";
import useCanvasCursor from "./CanvasCursor";  // Use relative import

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  useCanvasCursor(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
    />
  );
};

export default CanvasCursor;
