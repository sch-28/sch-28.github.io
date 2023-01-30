export type Project = {
	name: string;
	description: string;
	date: string;
	live?: string;
	github?: string;
};

export const project_list: Readonly<Project[]> = [
	{
		name: 'kg-vis',
		description: 'knowledge graph visualization tool, my bachelor thesis',
		date: '2022',
		live: 'https://sch-28.github.io/kg-vis',
		github: 'https://github.com/sch-28/kg-vis'
	},
	{
		name: 'Screen-2',
		description: 're-created my screen recorder',
		date: '2022',
		live: 'https://sch-28.github.io/screen-2/',
		github: 'https://github.com/sch-28/screen-2'
	},
	{
		name: 'nw-analyzer-2',
		description: 'tool for Black Desert Online allowing the processing of in game logs - version 2',
		date: '2022',
		live: 'https://nodewar.oracle-tools.site/',
		github: 'https://github.com/sch-28/war-analyzer-2'
	},
	{
		name: 'combat-logger',
		description: 'sniffing tool for Black Desert Online to extract combat logs',
		date: '2022',
		github: 'https://github.com/sch-28/combat_logger'
	},
	{
		name: 'Clever-Drones',
		description: 'flying drones trained with tensorflow',
		date: '2022',
		live: 'https://sch-28.github.io/clever-drones/',
		github: 'https://github.com/sch-28/clever-drones'
	},
	{
		name: 'Screen',
		description: 'easy to use & quick web screen recorder with cropping capabilities',
		date: '2022',
		live: 'https://screen.oracle-tools.site/',
		github: 'https://github.com/sch-28/screen'
	},
	{
		name: 'Ytbdl',
		description: 'just another social media video downloader',
		date: '2022',
		live: 'https://ytbdl.oracle-tools.site/',
		github: 'https://github.com/sch-28/ytbdl'
	},
	{
		name: 'NW-Analyzer',
		description: 'tool for Black Desert Online allowing the processing of in game logs',
		date: '2022',
		live: 'https://sch-28.github.io/war-analyzer/',
		github: 'https://github.com/sch-28/war-analyzer'
	},
	{
		name: 'Zousho',
		description: 'comic tracker & reader supporting multiple sources',
		date: '2021',
		live: 'https://github.com/sch-28/Zousho',
		github: 'https://github.com/sch-28/Zousho'
	},
	{
		name: 'boat-game',
		description: 'multiplayer ship game, first try at shaders',
		date: '2020',
		live: 'https://sch-28.github.io/boat-game/',
		github: 'https://github.com/sch-28/boat-game'
	},
	{
		name: 'time-warrior',
		description: '2d top-down game prototype',
		date: '2020',
		live: 'https://sch-28.github.io/time-warrior/',
		github: 'https://github.com/sch-28/time-warrior'
	},
	{
		name: 'stealthy-turn',
		description: 'strategy turn-based stealth game protoype',
		date: '2020',
		live: 'https://sch-28.github.io/stealthy-turn/',
		github: 'https://github.com/sch-28/stealthy-turn'
	},
	{
		name: 'Clever-Cars',
		description: 'pathfinding trained with tensorflow',
		date: '2019',
		live: 'https://sch-28.github.io/clever-cars/',
		github: 'https://github.com/sch-28/clever-cars'
	},
	{
		name: 'multi-sweeper',
		description: 'multiplayer Minesweeper (servers unavailable)',
		date: '2019',
		live: 'https://sch-28.github.io/multi-sweeper/',
		github: 'https://github.com/sch-28/multi-sweeper'
	}
] as const;
