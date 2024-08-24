import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

const initialTheme = localStorage.getItem('theme') as Theme;
export const theme = writable<Theme>(initialTheme);
theme.subscribe((value) => {
	const newTheme = value === 'dark' ? 'dark' : 'light';
	localStorage.setItem('theme', newTheme);
	document.documentElement.classList.remove('dark', 'light');
	document.documentElement.classList.add(newTheme);
});
