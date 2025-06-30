import React from 'react';

const emotions = ['joy', 'sadness', 'anger', 'fear', 'disgust', 'surprise'];

const baseEmotionMap: Record<string, Record<string, { label: string; emoji: string }>> = {
  joy: {
    joy: { label: 'Radiance', emoji: '🌟' },
    sadness: { label: 'Letdown', emoji: '😔' },
    anger: { label: 'Frustration', emoji: '😠' },
    fear: { label: 'Vulnerability', emoji: '😨' },
    disgust: { label: 'Regretful Indulgence', emoji: '🤢' },
    surprise: { label: 'Overwhelm', emoji: '😵' }
  },
  sadness: {
    joy: { label: 'Recovery', emoji: '😊' },
    sadness: { label: 'Despair', emoji: '😭' },
    anger: { label: 'Hopeless Rage', emoji: '😡' },
    fear: { label: 'Withdrawal', emoji: '😞' },
    disgust: { label: 'Collapse', emoji: '😩' },
    surprise: { label: 'Shock', emoji: '😱' }
  },
  anger: {
    joy: { label: 'Vindication', emoji: '😤' },
    sadness: { label: 'Ruin', emoji: '💥' },
    anger: { label: 'Explosion', emoji: '💣' },
    fear: { label: 'Aggressive Panic', emoji: '😬' },
    disgust: { label: 'Moral Fury', emoji: '🧨' },
    surprise: { label: 'Startled Fury', emoji: '😲' }
  },
  fear: {
    joy: { label: 'Hopeful Risk', emoji: '😰' },
    sadness: { label: 'Spiral', emoji: '🌀' },
    anger: { label: 'Terror-Rage', emoji: '😱' },
    fear: { label: 'Paralysis', emoji: '🧊' },
    disgust: { label: 'Repulsion', emoji: '😖' },
    surprise: { label: 'Jolt', emoji: '⚡️' }
  },
  disgust: {
    joy: { label: 'Uneasy Satisfaction', emoji: '😬' },
    sadness: { label: 'Revulsion', emoji: '😷' },
    anger: { label: 'Outrage', emoji: '🤬' },
    fear: { label: 'Aversion', emoji: '🙅‍♂️' },
    disgust: { label: 'Recoil', emoji: '🫢' },
    surprise: { label: 'Disgusted Shock', emoji: '🤯' }
  },
  surprise: {
    joy: { label: 'Delight', emoji: '🥳' },
    sadness: { label: 'Sudden Grief', emoji: '😢' },
    anger: { label: 'Flash Rage', emoji: '🔥' },
    fear: { label: 'Fright', emoji: '😳' },
    disgust: { label: 'Gag Reflex', emoji: '🤮' },
    surprise: { label: 'Awe', emoji: '😮' }
  }
};

// Symmetrize the map so [A][B] and [B][A] both work
const emotionMap: Record<string, Record<string, { label: string; emoji: string }>> = {};
for (const a of emotions) {
  for (const b of emotions) {
    const forward = baseEmotionMap[a]?.[b];
    const reverse = baseEmotionMap[b]?.[a];

    if (forward) {
      if (!emotionMap[a]) emotionMap[a] = {};
      emotionMap[a][b] = forward;
      if (!emotionMap[b]) emotionMap[b] = {};
      emotionMap[b][a] = forward; // mirror it
    } else if (reverse) {
      if (!emotionMap[a]) emotionMap[a] = {};
      emotionMap[a][b] = reverse;
    }
  }
}

function getResult(emotionA: string, emotionB: string) {
  return (
    emotionMap[emotionA]?.[emotionB] || {
      label: 'Confusion',
      emoji: '❓'
    }
  );
}

export default function EmotionMixer({
  emotionA,
  emotionB,
  setEmotionA,
  setEmotionB
}: {
  emotionA: string;
  emotionB: string;
  setEmotionA: (value: string) => void;
  setEmotionB: (value: string) => void;
}) {
  const result = getResult(emotionA, emotionB);

  return (
    <div className="p-6 text-white space-y-4">
      <h2 className="text-2xl font-semibold">Emotion Mixer</h2>
      <div className="flex gap-4 items-center justify-center">
        <select
          value={emotionA}
          onChange={(e) => setEmotionA(e.target.value)}
          className="bg-gray-800 p-2 rounded"
        >
          {emotions.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <span className="text-lg">→</span>

        <select
          value={emotionB}
          onChange={(e) => setEmotionB(e.target.value)}
          className="bg-gray-800 p-2 rounded"
        >
          {emotions.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div className="text-lg text-center mt-4">
        <div className="text-4xl mb-2">{result.emoji}</div>
        <div>
          <span className="opacity-75">Result:</span>{' '}
          <strong>{result.label}</strong>
        </div>
      </div>
    </div>
  );
}