import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
    <button style={{
    padding: 10,
    borderRadius: 15,
    border: 'none',
    backgroundColor: '#516EBE',
    boxShadow: hovered ? '4px 4px 8px rgba(0, 0, 0, 1)' : '4px 4px 8px rgba(0, 0, 0, .8)',
    cursor: 'pointer'
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <ArrowBackIcon fontSize="large" />
    </button>
   </>
  );
};
