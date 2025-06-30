import React from 'react';

interface Props {
  onToneChange: (tone: Tone, arousal: number) => void;
}

type Tone = 'calm' | 'neutral' | 'alert' | 'excited' | 'agitated';

const presetSignals: { tone: Tone; arousal: number }[] = [
  { tone: 'calm', arousal: 0.2 },
  { tone: 'neutral', arousal: 0.5 },
  { tone: 'alert', arousal: 0.6 },
  { tone: 'excited', arousal: 0.85 },
  { tone: 'agitated', arousal: 1 },
];

export const ToneControlPanel: React.FC<Props> = ({ onToneChange }) => {
  return (
    <div
      style={{
  position: 'fixed',
  top: 'calc(50% + 200px)', // same or just below your tone trail
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 15,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: '12px 16px',
  borderRadius: '10px',
  boxShadow: '0 0 12px rgba(0,0,0,0.4)',
  color: 'white',
  fontFamily: 'sans-serif',
}}
    >
      <div style={{ marginBottom: 8 }}>🎛️ Set Tone:</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {presetSignals.map(({ tone, arousal }) => (
          <button
            key={tone}
            onClick={() => onToneChange(tone, arousal)}
            style={{
              padding: '6px 10px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid #999',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
};