export type Project = {
	name: string;
	short_description: string;
	description: string;
	date: string;
	live?: string;
	github?: string;
};

export const project_list: Readonly<Project[]> = [
	{
		name: 'ikusa',
		short_description:
			'visualization tool for Black Desert Online combat events, version 3',
		description:
			'This is a re-creation of my nw-analyzer. It is a tool for the game Black Desert Online allowing the processing of in game logs. It is supposed to be used with the ikusa logger, allowing the user to upload a log file and to get a detailed analysis of the them. It is possible to share the analysis with other users.',
		date: '2023',
		live: 'https://ikusa.site/',
		github: 'https://github.com/sch-28/ikusa'
	},
	{
		name: 'ikusa-logger',
		short_description: 'improved sniffing tool for Black Desert Online to extract combat logs',
		description:
			'This is a network sniffing tool for the game Black Desert Online. It records and logs all combat related messages. It is supposed to be used together with ikusa, allowing the user to upload a log file and to get a detailed analysis of the them. This is a new version of the combat_logger, featuring automatic configuration & patcher',
		date: '2023',
		github: 'https://github.com/sch-28/ikusa_logger'
	},
	{
		name: 'kg-vis',
		short_description: 'knowledge graph visualization tool, my bachelor thesis',
		description:
			'This knowledge graph visualization tools allows you to visualize knowledge graphs in a simple and intuitive way. It is based on the vis.js library. The tool is designed to be easy to use and to allows dynamic manipulation of the content. It is possible to add/remove nodes - the tool automatically checks for relations between all nodes. The tool is designed to be used with a wikidata or dbpedia endpoint. However, it may also be used with other knowledge graphs.',
		date: '2022',
		live: 'https://sch-28.github.io/kg-vis',
		github: 'https://github.com/sch-28/kg-vis'
	},
	{
		name: 'screen-2',
		short_description: 're-created my screen recorder',
		description:
			'This is a re-creation of my screen recorder. It is a simple tool to record your screen directly using your browser. No need to download any software. It is designed to be easy to use, allowing the user to either record the whole screen or a specific area.',
		date: '2022',
		live: 'https://sch-28.github.io/screen-2/',
		github: 'https://github.com/sch-28/screen-2'
	},
	{
		name: 'nw-analyzer-2',
		short_description:
			'tool for Black Desert Online allowing the processing of in game logs - version 2',
		description:
			'This is a re-creation of my nw-analyzer. It is a tool for the game Black Desert Online allowing the processing of in game logs. It is supposed to be used with my combat-logger, allowing the user to upload a log file and to get a detailed analysis of the them. It is possible to share the analysis with other users.',
		date: '2022',
		live: 'https://nodewar.oracle-tools.site/',
		github: 'https://github.com/sch-28/war-analyzer-2'
	},
	{
		name: 'combat-logger',
		short_description: 'sniffing tool for Black Desert Online to extract combat logs',
		description:
			'This is a network sniffing tool for the game Black Desert Online. It records and logs all combat related messages. It is supposed to be used together with my nw-analyzer, allowing the user to upload a log file and to get a detailed analysis of the them.',
		date: '2022',
		github: 'https://github.com/sch-28/combat_logger'
	},
	{
		name: 'clever-drones',
		short_description: 'flying drones trained with tensorflow',
		description:
			'Utilizing tensorflow.js I created a tool to train a neural network that can fly on its own. It is using a simple neuroevolution algorithm to evolve the network. The trained drones are able to fly to any given position in a 2D space.',
		date: '2022',
		live: 'https://sch-28.github.io/clever-drones/',
		github: 'https://github.com/sch-28/clever-drones'
	},
	{
		name: 'screen',
		short_description: 'easy to use & quick web screen recorder with cropping capabilities',
		description:
			'This is a simple tool to record your screen directly using your browser. No need to download any software. It is designed to be easy to use, allowing the user to either record the whole screen or a specific area.',
		date: '2022',
		live: 'https://screen.oracle-tools.site/',
		github: 'https://github.com/sch-28/screen'
	},
	{
		name: 'ytbdl',
		short_description: 'just another social media video downloader',
		description:
			'This is a simple tool to download videos from social media platforms. It is designed to be easy to use, allowing the user to either download the full video or just a specific part of it.',
		date: '2022',
		live: 'https://ytbdl.oracle-tools.site/',
		github: 'https://github.com/sch-28/ytbdl'
	},
	{
		name: 'nw-analyzer',
		short_description: 'tool for Black Desert Online allowing the processing of in game logs',
		description:
			'This is a tool for the game Black Desert Online allowing the processing of in game logs. It is supposed to be used with my combat-logger, allowing the user to upload a log file and to get a detailed analysis of the them.',
		date: '2022',
		live: 'https://sch-28.github.io/war-analyzer/',
		github: 'https://github.com/sch-28/war-analyzer'
	},
	{
		name: 'zousho',
		short_description: 'comic tracker & reader supporting multiple sources',
		description:
			"This is a comic tracker & reader supporting multiple sources. It is designed to be easy to use, allowing the user to track their favorite comics and to read them in a simple and intuitive way. The website can automatically search for new releases and notify the user about them. I've not finished the project yet, but I'm planning to add more sources and to improve the user interface.",
		date: '2021',
		live: 'https://github.com/sch-28/Zousho',
		github: 'https://github.com/sch-28/Zousho'
	},
	{
		name: 'boat-game',
		short_description: 'multiplayer ship game, first try at shaders',
		description:
			'This is an unfinished multiplayer ship game made in unity. I played around with shaders to get a decent looking water surface and wave effects.',
		date: '2020',
		live: 'https://sch-28.github.io/boat-game/',
		github: 'https://github.com/sch-28/boat-game'
	},
	{
		name: 'time-warrior',
		description:
			'This is another unfinished game, where you have to kill enemy in different rooms - binding of isaac style. You also have the ability to slow time and dash through your enemies. I was planning to add more rooms, enemies and bosses, but I never got to it.',
		short_description: '2d top-down game prototype',
		date: '2020',
		live: 'https://sch-28.github.io/time-warrior/',
		github: 'https://github.com/sch-28/time-warrior'
	},
	{
		name: 'stealthy-turn',
		short_description: 'strategy turn-based stealth game protoype',
		description:
			'This browser/mobile game is a prototype for a turn-based stealth game. All you can do is move, be aware to not get caught and eliminate the enemies by walking onto them. It features a couple of levels.',
		date: '2020',
		live: 'https://sch-28.github.io/stealthy-turn/',
		github: 'https://github.com/sch-28/stealthy-turn'
	},
	{
		name: 'clever-cars',
		short_description: 'pathfinding trained with tensorflow',
		description:
			'Utilizing tensorflow.js I created a tool to train a neural network that can drive on its own. It is using a simple neuroevolution algorithm to evolve the network. The trained cars are able to drive through a track that can be drawn by the user.',
		date: '2019',
		live: 'https://sch-28.github.io/clever-cars/',
		github: 'https://github.com/sch-28/clever-cars'
	}
] as const;
