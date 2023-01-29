<script lang="ts">
	import { projects } from '../projects';
</script>

<h1>jan</h1>
<h2 class="mb-2">web-developer</h2>
<div class="md:flex flex-col space-y-2 md:space-y-0">
	<p class="block md:hidden">projects</p>
	<div class="md:flex hidden gap-2">
		<p class="w-2/12">projects</p>
		<p class="flex-grow ">description</p>
		<p>date</p>
	</div>
	<hr class="border-dashed !my-2" />
	{#each projects as project}
		<div
			class="md:flex gap-2 hover:bg-white hover:text-black transition-colors duration-75 cursor-pointer"
		>
			<p class="md:w-2/12">{project.name}</p>
			<p class="flex-grow">{project.desc}</p>
			<p>{project.date}</p>
		</div>
	{/each}
</div>
