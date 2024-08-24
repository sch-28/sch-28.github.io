<script>
	import '../app.css';
	import Github from 'svelte-material-icons/Github.svelte';
	import Email from 'svelte-material-icons/EmailFast.svelte';
	import { theme, locale, locales } from '$lib';

	function toggle_theme() {
		theme.set($theme === 'dark' ? 'light' : 'dark');
	}
</script>

<svelte:head>
	<title>Jan Schmidt</title>
	<meta name="description" content="References of Jan Schmidt" />
</svelte:head>

<div class="absolute top-2 right-2 flex items-center gap-2">
	<select bind:value={$locale} class="bg-transparent">
		{#each locales as l}
			<option value={l} class="bg-white text-black dark:bg-black dark:text-white">{l}</option>
		{/each}
	</select>

	<button class="dark:grayscale" on:click={toggle_theme}>
		{#if $theme === 'dark'}
			☀️
		{:else}
			🌙
		{/if}
	</button>
</div>

<div class="flex justify-center md:h-screen">
	<div class="max-w-6xl p-4 w-full md:my-auto">
		<p class="flex gap-2 items-center">
			jan <a href="https://github.com/sch-28" target="_blank" aria-label="github"
				><Github size="18" /></a
			><a href="mailto:dev.sch.28@gmail.com" aria-label="email"><Email size="18" /></a>
		</p>
		<p class="mb-2">web-developer</p>
		<slot />
	</div>
</div>
