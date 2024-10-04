import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';
export const selectedTheme = atom<Theme>('light');

export type Step = number;
export const currentStep = atom<Step>(0);

export type Category = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';
export const selectedCategory = atom<Category>('HTML');

export type Score = number;
export const totalScore = atom<Score>(0);

export const selectedOption = atom<string>('');
