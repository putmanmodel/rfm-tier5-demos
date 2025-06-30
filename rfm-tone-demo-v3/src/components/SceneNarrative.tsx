import React from 'react';

interface Props {
  tone: 'calm' | 'neutral' | 'alert' | 'excited' | 'agitated';
}

const sceneLines: Record<Props['tone'], string> = {
  calm: 'The wind brushes the tall grass — steady and soft.',
  neutral: 'Nothing has changed, but something might.',
  alert: 'The forest leans in. Something waits to move.',
  excited: 'You crest the ridge and catch your breath.',
  agitated: 'You’re not alone — something watches back.',
};

export const SceneNarrative: React.FC<Props> = ({ tone }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% + 160px)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 12,
        fontSize: '15px',
        color: '#ffffff',
        fontFamily: 'serif',
        textAlign: 'center',
        textShadow: '0 0 6px rgba(0,0,0,0.6)',
        opacity: 0.85,
        transition: 'opacity 0.8s ease',
        maxWidth: '80vw',
        paddingTop: '8px',
      }}
    >
      {sceneLines[tone]}
    </div>
  );
};