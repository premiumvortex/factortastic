import React from "react";

export default function SettingTitles({ text }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, index) => (
        <div
          key={index}
          className={`tutorial-text text-${index === 1 ? 'pink' : 'cyan'}${index > 0 ? ' padding-left-20' : ''}`}
        >
          {word}
        </div>
      ))}
    </>
  );
}
