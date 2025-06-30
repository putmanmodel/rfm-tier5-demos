import React, { useEffect, useState } from 'react';

interface Props {
  tone: string;
  arousal: number;
}

const toneColors: Record<string, string> = {
  calm: 'hsl(210, 60%, 50%)',
  neutral: 'hsl(120, 50%, 60%)',
  alert: 'hsl(60, 80%, 55%)',
  excited: 'hsl(35, 90%, 60%)',
  agitated: 'hsl(0, 100%, 50%)',
};

export const ToneGlowHUD: React.FC<Props> = ({ tone, arousal }) => {
  const [visibleTone, setVisibleTone] = useState(tone);

  // Debounced visual update
  useEffect(() => {
    const timeout = setTimeout(() => setVisibleTone(tone), 150); // slight delay for smoother change
    return () => clearTimeout(timeout);
  }, [tone]);

  const toneColor = toneColors[visibleTone] || 'transparent';
  const opacity = 0.2 + arousal * 0.5; // between 0.2 and 0.7
  const blur = 20 + arousal * 30;      // between 20px and 50px

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background-color 1.2s ease, opacity 1.2s ease, filter 1.2s ease',
        backgroundColor: toneColor,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};