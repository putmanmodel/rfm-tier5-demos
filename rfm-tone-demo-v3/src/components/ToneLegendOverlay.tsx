import React from 'react';

interface Props {
  tone: string;
  arousal: number;
}

const toneDescriptions: Record<string, string> = {
  calm: 'Soothing & Stable',
  neutral: 'Balanced & Open',
  alert: 'Cautious Readiness',
  excited: 'Eager Energy',
  agitated: 'Emotional Turbulence',
};

export const ToneLegendOverlay: React.FC<Props> = ({ tone, arousal }) => {
  const toneLabel = toneDescriptions[tone] || 'Unknown';
  const intensity = Math.round(arousal * 100);

  return (
    <div
      style={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '12px 16px',
        borderRadius: '12px',
        fontFamily: 'sans-serif',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'opacity 0.6s ease',
      }}
    >
      <div><strong>Tone:</strong> {tone}</div>
      <div><strong>Meaning:</strong> {toneLabel}</div>
      <div><strong>Arousal:</strong> {intensity}%</div>
    </div>
  );
};