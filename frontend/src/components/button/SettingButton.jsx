import React, { useState } from "react";

export default function SettingButton({text}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <button style={{
      padding: 5, margin: 10, display: 'block',
      borderRadius: 50, border: 'none', fontSize: 40, backgroundColor: '#EE66C8',
      boxShadow: hovered ? '0px 8px 8px rgba(96, 252, 253, 0)' : '0px 8px 8px rgba(96, 252, 253, 0.5)',
      cursor: 'pointer'
    }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {text}
    </button>
  )
}
