import React from 'react';

interface Props {
  tone: 'calm' | 'neutral' | 'alert' | 'excited' | 'agitated';
  arousal: number;
}

const toneDescriptions: Record<Props['tone'], string> = {
  calm: 'Soothing & Stable',
  neutral: 'Balanced & Open',
  alert: 'Cautious Readiness',
  excited: 'Eager Energy',
  agitated: 'Emotional Turbulence',
};

const toneColors: Record<Props['tone'], string> = {
  calm: '#4A90E2',
  neutral: '#7ED321',
  alert: '#F8E71C',
  excited: '#F5A623',
  agitated: '#D0021B',
};

export const ToneMeaningOverlay: React.FC<Props> = ({ tone, arousal }) => {
  const toneLabel = toneDescriptions[tone];
  const toneColor = toneColors[tone];
  const intensity = Math.round(arousal * 100);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        backgroundColor: 'rgba(20, 20, 20, 0.92)',
        color: '#ffffff',
        padding: '18px 24px',
        borderRadius: '14px',
        fontFamily: 'sans-serif',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        maxWidth: '320px',
        lineHeight: 1.6,
        fontSize: '16px',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <span
          style={{
            display: 'inline-block',
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: toneColor,
            marginRight: 10,
          }}
        />
        <strong style={{ fontSize: '18px' }}>{tone.toUpperCase()}</strong>
      </div>
      <div><strong>Meaning:</strong> {toneLabel}</div>
      <div><strong>Arousal:</strong> {intensity}%</div>
    </div>
  );
};