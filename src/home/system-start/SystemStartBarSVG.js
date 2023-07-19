import React from "react";

const SystemStartBarSVG = ({ width, height, color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 690 44"
      style={{ enableBackground: "new 0 0 690 44", width, height }}
    >
      <g>
        <rect width="690" height="44" fill={color} />
      </g>
    </svg>
  );
};

export default SystemStartBarSVG;
