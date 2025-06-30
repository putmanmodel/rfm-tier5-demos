import { useEffect, useState } from 'react';
import { ToneGlowHUD } from './components/ToneGlowHUD';
import { ToneMeaningOverlay } from './components/ToneMeaningOverlay'; // Make sure this matches the actual file/component name
import { ArousalMeter } from './components/ArousalMeter';
import { ToneCaption } from './components/ToneCaption';

const TONES = ['calm', 'neutral', 'alert', 'excited', 'agitated'] as const;
type Tone = typeof TONES[number];

interface EmotionSignal {
  tone: Tone;
  arousal: number; // 0 to 1
}

const FEED: EmotionSignal[] = [
  { tone: 'calm', arousal: 0.2 },
  { tone: 'neutral', arousal: 0.4 },
  { tone: 'alert', arousal: 0.6 },
  { tone: 'excited', arousal: 0.85 },
  { tone: 'agitated', arousal: 1 },
];

function App() {
  const [signal, setSignal] = useState<EmotionSignal>(FEED[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % FEED.length;
      setSignal(FEED[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* 🎨 Fullscreen emotional tone glow */}
      <ToneGlowHUD tone={signal.tone} arousal={signal.arousal} />

      {/* 🧠 Overlay displaying symbolic tone meaning */}
      <ToneMeaningOverlay tone={signal.tone} arousal={signal.arousal} />
    <ArousalMeter arousal={signal.arousal} />
    <ToneCaption tone={signal.tone} />
    </div>
  );
}

export default App;