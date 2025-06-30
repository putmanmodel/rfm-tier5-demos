import React from 'react';

interface Props {
  arousal: number; // 0 to 1
}

export const ArousalMeter: React.FC<Props> = ({ arousal }) => {
  const width = Math.round(arousal * 200); // up to 200px wide

  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% + 80px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '12px',
        backgroundColor: '#333',
        borderRadius: '6px',
        overflow: 'hidden',
        zIndex: 12,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: '100%',
          backgroundColor: '#ff4d4f',
          transition: 'width 1s ease',
        }}
      />
    </div>
  );
};