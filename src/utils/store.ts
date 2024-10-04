import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';
export const selectedTheme = atom<Theme>('light');

export type Step = number;
export const currentStep = atom<Step>(0);
