import React from 'react';

interface Props {
  tone: string;
  arousal: number; // from 0 to 1
}

const toneColors: Record<string, string> = {
  calm: 'hsl(210, 60%, 50%)',
  neutral: 'hsl(120, 50%, 60%)',
  alert: 'hsl(60, 80%, 55%)',
  excited: 'hsl(35, 90%, 60%)',
  agitated: 'hsl(0, 100%, 50%)',
};

export const ToneArousalDials: React.FC<Props> = ({ tone, arousal }) => {
  const percent = Math.round(arousal * 100);
  const color = toneColors[tone] || 'gray';

  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(6px)',
        padding: '1rem',
        borderRadius: '12px',
        color: 'white',
        zIndex: 1000,
        fontSize: '0.85rem',
        width: '100px',
        boxShadow: '0 0 10px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Tone & Arousal</div>

      {/* Tone Dial */}
      <div
        style={{
          width: '2.2rem',
          height: '2.2rem',
          borderRadius: '50%',
          backgroundColor: color,
          margin: '0 auto',
          border: '2px solid white',
        }}
        title={`Tone: ${tone}`}
      />

      {/* Arousal Dial */}
      <div
        style={{
          marginTop: '0.8rem',
          position: 'relative',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          background: `conic-gradient(#fff ${percent}%, rgba(255,255,255,0.2) ${percent}% 100%)`,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        title={`Arousal: ${percent}%`}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '0.7rem',
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};