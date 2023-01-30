<script>
	import '../app.css';
	import Github from 'svelte-material-icons/Github.svelte';
	import Email from 'svelte-material-icons/EmailFast.svelte';
</script>

<div class="flex justify-center md:h-screen">
	<div class="max-w-6xl p-4 w-full md:my-auto">
		<p class="flex gap-2 items-center">
			jan <a href="https://github.com/sch-28"><Github size="18" /></a><a
				href="mailto:dev.sch.28@gmail.com"><Email size="18" /></a
			>
		</p>
		<p class="mb-2">web-developer</p>
		<slot />
	</div>
</div>
