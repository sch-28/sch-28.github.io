<script lang="ts">
	import { project_list } from '../project_data';
</script>

<div class="md:flex flex-col space-y-2 md:space-y-0">
	<p class="block md:hidden">projects</p>
	<div class="md:flex hidden gap-2">
		<p class="w-2/12">projects</p>
		<p class="flex-grow ">description</p>
		<p>date</p>
	</div>
	<hr class="border-dashed !my-2" />
	{#each project_list as project}
		<a
			href={project.name}
			class="md:flex gap-2 hover:bg-white hover:text-black transition-colors duration-75 cursor-pointer block"
		>
			<p class="md:w-2/12 text-blue-500">{project.name}</p>
			<p class="flex-grow">{project.short_description}</p>
			<p>{project.date}</p>
		</a>
	{/each}
</div>
