import React from 'react';

const emojiMap: Record<string, string> = {
  joy: '😄',
  sadness: '😢',
  anger: '😠',
  fear: '😨',
  disgust: '🤢',
  surprise: '😲',
  radiance: '✨',
  letdown: '😞',
  frustration: '😤',
  vulnerability: '😔',
  regretfulIndulgence: '😩',
  overwhelm: '🥴',
  recovery: '🕊️',
  despair: '💧',
  hopelessRage: '🔥',
  withdrawal: '🚪',
  collapse: '🫠',
  shock: '😱',
  vindication: '🏆',
  ruin: '🏚️',
  explosion: '💥',
  aggressivePanic: '😖',
  moralFury: '🧨',
  startledFury: '🙀',
  hopefulRisk: '🧗',
  spiral: '🌀',
  terrorRage: '👹',
  paralysis: '🧊',
  repulsion: '🙅‍♂️',
  jolt: '⚡️',
  uneasySatisfaction: '😬',
  revulsion: '😷',
  outrage: '👿',
  aversion: '🚫',
  recoil: '📉',
  disgustedShock: '🤮',
  delight: '🥰',
  suddenGrief: '😭',
  flashRage: '🤬',
  fright: '👻',
  gagReflex: '🤢',
  awe: '🌌',
  confusion: '❓'
};

type Props = {
  emotionA: string;
  emotionB: string;
};

export default function FieldVectorHUD({ emotionA, emotionB }: Props) {
  const mixerResultKey = getMixerKey(emotionA, emotionB);

  const items = [
  { label: 'Emotion 1', emotion: emotionA },
  { label: '→', isArrow: true },
  { label: 'Emotion 2', emotion: emotionB },
  { label: '→', isArrow: true },
  { label: 'Mixer Result', emotion: mixerResultKey }
];

  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {items.map((item, idx) => {
        if (item.isArrow) {
          return (
            <div key={idx} className="text-4xl text-white">
              →
            </div>
          );
        }

        const emoji = emojiMap[item.emotion ?? 'confusion'] || emojiMap['confusion'];

        return (
          <div key={idx} className="flex flex-col items-center space-y-1 w-24">
            <div className="text-4xl" title={item.label} style={{ lineHeight: '3rem' }}>
              {emoji}
            </div>
            <div className="text-xs text-white text-center opacity-80">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function getMixerKey(a: string, b: string) {
  const emotionMap: Record<string, Record<string, string>> = {
    joy: {
      joy: 'radiance',
      sadness: 'letdown',
      anger: 'frustration',
      fear: 'vulnerability',
      disgust: 'regretfulIndulgence',
      surprise: 'overwhelm'
    },
    sadness: {
      joy: 'recovery',
      sadness: 'despair',
      anger: 'hopelessRage',
      fear: 'withdrawal',
      disgust: 'collapse',
      surprise: 'shock'
    },
    anger: {
      joy: 'vindication',
      sadness: 'ruin',
      anger: 'explosion',
      fear: 'aggressivePanic',
      disgust: 'moralFury',
      surprise: 'startledFury'
    },
    fear: {
      joy: 'hopefulRisk',
      sadness: 'spiral',
      anger: 'terrorRage',
      fear: 'paralysis',
      disgust: 'repulsion',
      surprise: 'jolt'
    },
    disgust: {
      joy: 'uneasySatisfaction',
      sadness: 'revulsion',
      anger: 'outrage',
      fear: 'aversion',
      disgust: 'recoil',
      surprise: 'disgustedShock'
    },
    surprise: {
      joy: 'delight',
      sadness: 'suddenGrief',
      anger: 'flashRage',
      fear: 'fright',
      disgust: 'gagReflex',
      surprise: 'awe'
    }
  };

  return emotionMap[a]?.[b] || emotionMap[b]?.[a] || 'confusion';
}