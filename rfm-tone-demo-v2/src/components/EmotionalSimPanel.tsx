import React, { useEffect, useState } from 'react';

const mockEmotions = [
  {
    name: 'NPC 1',
    emotion: 'anger',
    color: 'bg-red-500',
    intensity: 0.6,
    caption: 'Fueled by injustice'
  },
  {
    name: 'NPC 2',
    emotion: 'sadness',
    color: 'bg-blue-500',
    intensity: 0.3,
    caption: 'Heavy with loss'
  },
  {
    name: 'NPC 3',
    emotion: 'joy',
    color: 'bg-yellow-400',
    intensity: 0.8,
    caption: 'Overflowing vitality'
  }
];

export default function EmotionalSimPanel() {
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScale(prev => 1 + 0.05 * Math.sin(Date.now() / 300));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 justify-center items-start flex-wrap">
      {mockEmotions.map((npc, idx) => (
        <div key={idx} className="text-center space-y-2 w-40">
          <div
            className={`
              ${npc.color}
              rounded-full
              transition-all duration-150
              mx-auto
              shadow-lg
            `}
            style={{
              width: `${80 + npc.intensity * 80 * pulseScale}px`,
              height: `${80 + npc.intensity * 80 * pulseScale}px`,
              filter: `drop-shadow(0 0 ${10 + npc.intensity * 30}px ${
                npc.color.replace('bg-', '')
              })`,
              transition: 'transform 0.2s ease-in-out'
            }}
          />
          <div className="text-sm text-white opacity-80">
            {npc.name} — {npc.emotion} ({Math.round(npc.intensity * 100)}%)
          </div>
          <div className="text-xs text-white opacity-60 italic">
            {npc.caption}
          </div>
        </div>
      ))}
    </div>
  );
}