import React from 'react';
import './Skeleton.css';

const SkeletonBlock = ({ label, id }) => {
  const buttonId = `sb-b-${id}`;
  const labelId = `sb-l-${id}`;

  const buttonStyle = { backgroundImage: `linear-gradient(to right, #${buttonId}a0, #${buttonId}f0)` };
  const labelStyle = { backgroundImage: `linear-gradient(to right, #${labelId}70, #${labelId}e0)` };

  return (
    <div className="skeleton-block">
      <div id={buttonId} className="sb-button" style={buttonStyle}></div>
      <div id={labelId} className="sb-label" style={labelStyle}>
        <h3>{label}</h3>
      </div>
    </div>
  );
};

SkeletonBlock.defaultProps = {
  label: 'BB-2023',
  id: 0, // Default ID value can be changed to your desired initial number
};

export default SkeletonBlock;
