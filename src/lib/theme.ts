import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

const initialTheme = browser
	? ((localStorage.getItem('theme') as Theme | undefined) ?? 'dark')
	: 'dark';
export const theme = writable<Theme>(initialTheme);
theme.subscribe((value) => {
	if (!browser) return;
	const newTheme = value === 'dark' ? 'dark' : 'light';
	localStorage.setItem('theme', newTheme);
	document.documentElement.classList.remove('dark', 'light');
	document.documentElement.classList.add(newTheme);
});
