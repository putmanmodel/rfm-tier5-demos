import React, { useEffect, useRef, useState } from 'react';

interface Props {
  tone: 'calm' | 'neutral' | 'alert' | 'excited' | 'agitated';
}

const toneColors: Record<Props['tone'], string> = {
  calm: '#4A90E2',
  neutral: '#7ED321',
  alert: '#F8E71C',
  excited: '#F5A623',
  agitated: '#D0021B',
};

export const ToneTrail: React.FC<Props> = ({ tone }) => {
  const [trail, setTrail] = useState<Props['tone'][]>([]);
  const lastTone = useRef<string | null>(null);

  useEffect(() => {
    if (tone !== lastTone.current) {
      setTrail(prev => {
        const updated = [...prev, tone];
        return updated.slice(-5); // keep last 5 only
      });
      lastTone.current = tone;
    }
  }, [tone]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 200,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 12,
      }}
    >
      {trail.map((t, index) => (
        <div
          key={index}
          title={t}
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: toneColors[t],
            boxShadow: '0 0 6px rgba(0,0,0,0.4)',
          }}
        />
      ))}
    </div>
  );
};