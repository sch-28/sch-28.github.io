<script lang="ts">
	import { page } from '$app/stores';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
	import { project_list, type Project } from '../../project_data';

	$: project_name = $page.params.project;
	$: selected_project = project_list.find((project) => project.name === project_name);
</script>

{#if selected_project}
	<div class="md:flex flex-col space-y-2 md:space-y-0">
		<a href="/" class="h-6 flex items-center gap-2">
			<ArrowLeft />
			<p>{selected_project.name}</p>
		</a>
		<hr class="border-dashed !my-2" />
		<div class="relative">
			{#each project_list as project}
				<a
					href={project.name === project_name ? '/' : `${project.name}`}
					class="md:flex transition-colors duration-75 cursor-pointer block "
				>
					<p
						class="hover:bg-white hover:text-black md:w-2/12 text-blue-500 {project.name ===
						project_name
							? 'bg-white text-black'
							: ''}"
					>
						{project.name}
					</p>
					{#if project.name === project_name}
						<div class="w-10/12 absolute left-[16.66667%] -top-2 bottom-0 box-border border-l border-dashed p-2">test</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
{:else}
	<h1>Project not found</h1>
{/if}
