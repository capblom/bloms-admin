import React from "react";

const SystemStartCornerSVG = ({ width, height, color, rotate }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 52 44"
      style={{ enableBackground: "new 0 0 52 44", width, height, transform: `rotate(${rotate}deg)` }}
    >
      <g>
        <path d="M52,43.99C52,44,52,44,52,43.99L22,44C9.85,44,0,34.15,0,22l0,0C0,9.85,9.85,0,22,0h29.99C52,0,52,0,52,0.01V43.99z" fill={color} />
      </g>
    </svg>
  );
};

export default SystemStartCornerSVG;
