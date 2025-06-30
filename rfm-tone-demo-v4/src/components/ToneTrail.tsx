import React from 'react';

interface Props {
  trail: string[]; // or use 'Tone[]' if you've defined that type elsewhere
}

export const ToneTrail: React.FC<Props> = ({ trail }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '200px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 1,
      }}
    >
      {trail.map((tone, index) => (
        <div
          key={index}
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: toneColor(tone),
            transition: 'opacity 0.5s ease',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

function toneColor(tone: string): string {
  switch (tone) {
    case 'calm':
      return 'hsl(210, 60%, 50%)';
    case 'neutral':
      return 'hsl(120, 50%, 60%)';
    case 'alert':
      return 'hsl(60, 80%, 55%)';
    case 'excited':
      return 'hsl(35, 90%, 60%)';
    case 'agitated':
      return 'hsl(0, 100%, 50%)';
    default:
      return 'gray';
  }
}