// src/utils/colorPalettes.ts

export type HSL = {
  hue: number;
  sat: number;
  light: number;
};

// Base emotional tone palette using HSL values
export const defaultPalettes: Record<string, HSL> = {
  calm:     { hue: 210, sat: 60, light: 50 }, // Blue
  neutral:  { hue: 120, sat: 50, light: 60 }, // Green
  alert:    { hue: 60,  sat: 80, light: 55 }, // Yellow
  excited:  { hue: 35,  sat: 90, light: 60 }, // Orange
  agitated: { hue: 0,   sat:100, light: 50 }, // Red
};

// Utility: interpolate two HSL values based on t (0–1)
export function interpolateHSL(a: HSL, b: HSL, t: number): HSL {
  return {
    hue: a.hue + (b.hue - a.hue) * t,
    sat: a.sat + (b.sat - a.sat) * t,
    light: a.light + (b.light - a.light) * t,
  };
}