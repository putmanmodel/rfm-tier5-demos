import React from 'react';

interface Props {
  tone: 'calm' | 'neutral' | 'alert' | 'excited' | 'agitated';
}

const toneCaptions: Record<Props['tone'], string> = {
  calm: 'The water is still.',
  neutral: 'A question hangs in the air.',
  alert: 'A shift in the wind...',
  excited: 'The spark catches — fire begins.',
  agitated: 'The sky trembles with noise.',
};

export const ToneCaption: React.FC<Props> = ({ tone }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% + 120px)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 12,
        fontSize: '17px',
        color: '#ffffff',
        fontFamily: 'serif',
        textAlign: 'center',
        textShadow: '0 0 6px rgba(0,0,0,0.6)',
        transition: 'opacity 0.8s ease',
        opacity: 0.9,
      }}
    >
      {toneCaptions[tone]}
    </div>
  );
};