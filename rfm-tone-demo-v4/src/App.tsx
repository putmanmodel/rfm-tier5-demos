import { useEffect, useState } from 'react';
import { ToneGlowHUD } from './components/ToneGlowHUD';
import { ToneMeaningOverlay } from './components/ToneMeaningOverlay';
import { ToneTrail } from './components/ToneTrail';
import { ArousalMeter } from './components/ArousalMeter';

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
  const [history, setHistory] = useState<EmotionSignal[]>([FEED[0]]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % FEED.length;
      const next = FEED[index];
      setSignal(next);
      setHistory(prev => [...prev.slice(-4), next]); // keep last 5
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ToneGlowHUD tone={signal.tone} arousal={signal.arousal} />
      <ToneMeaningOverlay tone={signal.tone} arousal={signal.arousal} />
      <ArousalMeter arousal={signal.arousal} />
      <ToneTrail trail={history.map(h => h.tone)} />
    </>
  );
}

export default App;