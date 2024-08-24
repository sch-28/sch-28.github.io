import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Locale = 'en' | 'de';
export type Translation = Record<Locale, string>;
export const locales: Locale[] = ['en', 'de'];

const initialLocale: Locale = browser
	? ((localStorage.getItem('locale') as Locale | undefined) ?? 'en')
	: 'en';
export const locale = writable<Locale>(initialLocale);
locale.subscribe((value) => {
	if (!browser) return;
	const newLocale = value === 'de' ? 'de' : 'en';
	localStorage.setItem('locale', newLocale);
});

function translate(locale: Locale, translations: Translation) {
	return translations[locale];
}

export const t = derived(
	locale,
	($locale) => (translations: Translation) => translate($locale, translations)
);
