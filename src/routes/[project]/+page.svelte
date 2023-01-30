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
					class="flex transition-colors duration-75  cursor-default"
				>
					<p
						class="hidden md:block hover:bg-white hover:text-black w-2/12 text-blue-500 cursor-pointer {project.name ===
						project_name
							? 'bg-white text-black'
							: ''}"
					>
						{project.name}
					</p>
					{#if project.name === project_name}
						<div
							class="md:w-10/12 md:absolute left-[16.66667%] -top-2 bottom-0 box-border md:border-l border-dashed md:p-2 h-full flex flex-col"
						>
							<div class="flex gap-2">
								{project_name}
								{#if project.live}
									<a class="bg-white text-black" href={project.live}>Live</a>
								{/if}
								{#if project.github}
									<a class="bg-white text-black" href={project.github}>GitHub</a>
								{/if}
								<p class="ml-auto">{project.date}</p>
							</div>

							<p class="normal-case">{project.description}</p>

							<div class="mt-auto" />
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
{:else}
	<h1>Project not found</h1>
{/if}
