import type { Translation } from './locale';

export type Project = {
	name: string;
	short_description: Translation;
	description: Translation;
	date: string;
	live?: string;
	github?: string;
};

export const project_list: Readonly<Project[]> = [
	{
		name: 'ikusa',
		short_description: {
			de: 'Dashboard & Visualisierungstool für "Black Desert Online"',
			en: "dashboard & visualization tool for 'Black Desert Online' combat events"
		},
		description: {
			de: 'Es ist ein Tool für das Spiel "Black Desert Online", das die Verarbeitung von Kampf Ereignissen ermöglicht. Es wird zusammen mit meinem ikusa-Logger verwendet, um dem Benutzer das Hochladen seiner Game Logs zu ermöglichen und eine detaillierte Analyse zu bekommen. Es ist möglich, die Analyse mit anderen Benutzern zu teilen.',
			en: 'This is a re-creation of my other nw-analyzers. It is a tool for the game Black Desert Online allowing the processing of in game logs. It is supposed to be used with the ikusa logger, allowing the user to upload a log file and to get a detailed analysis of the them. It is possible to share the analysis with other users.'
		},
		date: '2023',
		live: 'https://ikusa.site/',
		github: 'https://github.com/sch-28/ikusa'
	},
	{
		name: 'kg-vis',
		short_description: {
			de: 'Visualisierungstool für Wissensgraphen, meine Bachelorarbeit',
			en: 'knowledge graph visualization tool, my bachelor thesis'
		},
		description: {
			de: 'Dieses Visualisierungstool für Wissensgraphen ermöglicht es Ihnen, Wissensgraphen auf einfache und intuitive Weise zu visualisieren. Es basiert auf der vis.js-Bibliothek. Das Tool ist einfach zu bedienen und ermöglicht eine dynamische Manipulation des Inhalts. Es ist möglich, Knoten hinzuzufügen/zu entfernen - das Tool überprüft automatisch die Beziehungen zwischen allen Knoten. Das Tool ist darauf ausgelegt, mit einem Wikidata- oder DBpedia-Endpunkt verwendet zu werden. Es kann jedoch auch mit anderen Wissensgraphen verwendet werden.',
			en: 'This knowledge graph visualization tools allows you to visualize knowledge graphs in a simple and intuitive way. It is based on the vis.js library. The tool is designed to be easy to use and to allows dynamic manipulation of the content. It is possible to add/remove nodes - the tool automatically checks for relations between all nodes. The tool is designed to be used with a wikidata or dbpedia endpoint. However, it may also be used with other knowledge graphs.'
		},
		date: '2022',
		live: 'https://sch-28.github.io/kg-vis',
		github: 'https://github.com/sch-28/kg-vis'
	},
	{
		name: 'screen-2',
		short_description: {
			de: 'Einfacher Bildschirmrekorder im Browser',
			en: 'simple screen recorder in the browser'
		},
		description: {
			de: 'Es ist ein simples Tool, um den Bildschirm direkt im Browser aufzuzeichnen. Es ist nicht erforderlich, zusätzliche Software herunterzuladen. Es ist so konzipiert, dass es einfach zu bedienen ist und dem Benutzer ermöglicht, entweder den gesamten Bildschirm oder einen bestimmten Bereich aufzuzeichnen.',
			en: 'It is a simple tool to record your screen directly using your browser. No need to download any software. It is designed to be easy to use, allowing the user to either record the whole screen or a specific area.'
		},
		date: '2022',
		live: 'https://sch-28.github.io/screen-2/',
		github: 'https://github.com/sch-28/screen-2'
	},
	{
		name: 'clever-drones',
		short_description: {
			de: 'Mit TensorFlow trainierte fliegende Drohnen',
			en: 'flying drones trained with tensorflow'
		},
		description: {
			de: 'Mithilfe von tensorflow.js habe ich ein Tool erstellt, um ein neuronales Netzwerk zu trainieren, das von selbst fliegen kann. Es verwendet einen einfachen Neuroevolutionsalgorithmus, um das Netzwerk weiterzuentwickeln. Die trainierten Drohnen sind in der Lage, zu einer beliebigen Position in einem 2D-Raum zu fliegen.',
			en: 'Utilizing tensorflow.js I created a tool to train a neural network that can fly on its own. It is using a simple neuroevolution algorithm to evolve the network. The trained drones are able to fly to any given position in a 2D space.'
		},
		date: '2022',
		live: 'https://sch-28.github.io/clever-drones/',
		github: 'https://github.com/sch-28/clever-drones'
	},
	{
		name: 'ytbdl',
		short_description: {
			de: 'Nur ein weiterer Social-Media-Video-Downloader',
			en: 'just another social media video downloader'
		},
		description: {
			de: 'Dies ist ein einfaches Tool zum Herunterladen von Videos von Social-Media-Plattformen. Es ist so konzipiert, dass es einfach zu bedienen ist und dem Benutzer ermöglicht, entweder das gesamte Video oder nur einen bestimmten Teil davon herunterzuladen.',
			en: 'This is a simple tool to download videos from social media platforms. It is designed to be easy to use, allowing the user to either download the full video or just a specific part of it.'
		},
		date: '2022',
		live: 'https://ytbdl.oracle-tools.site/',
		github: 'https://github.com/sch-28/ytbdl'
	},
	{
		name: 'zousho',
		short_description: {
			de: 'Comic-Tracker & -Reader mit Unterstützung mehrerer Quellen',
			en: 'comic tracker & reader supporting multiple sources'
		},
		description: {
			de: 'Dies ist ein Comic-Tracker & -Reader mit Unterstützung mehrerer Quellen. Es ist so konzipiert, dass es einfach zu bedienen ist und dem Benutzer ermöglicht, seine Lieblingscomics zu verfolgen und sie auf einfache und intuitive Weise zu lesen. Die Website kann automatisch nach neuen Veröffentlichungen suchen und den Benutzer darüber informieren. Ich habe das Projekt noch nicht abgeschlossen, aber ich plane, weitere Quellen hinzuzufügen und die Benutzeroberfläche zu verbessern.',
			en: "This is a comic tracker & reader supporting multiple sources. It is designed to be easy to use, allowing the user to track their favorite comics and to read them in a simple and intuitive way. The website can automatically search for new releases and notify the user about them. I've not finished the project yet, but I'm planning to add more sources and to improve the user interface."
		},
		date: '2021',
		live: 'https://github.com/sch-28/Zousho',
		github: 'https://github.com/sch-28/Zousho'
	},
	{
		name: 'boat-game',
		short_description: {
			de: 'Multiplayer-Schiffsspiel, erster Versuch mit Shadern',
			en: 'multiplayer ship game, first try at shaders'
		},
		description: {
			de: 'Dies ist ein unvollendetes Multiplayer-Schiffsspiel, das in Unity erstellt wurde. Ich habe mit Shadern herumgespielt, um eine Wasseroberfläche mit Welleneffekten zu erhalten.',
			en: 'This is an unfinished multiplayer ship game made in unity. I played around with shaders to get a water surface with wave effects.'
		},
		date: '2020',
		live: 'https://sch-28.github.io/boat-game/',
		github: 'https://github.com/sch-28/boat-game'
	},
	{
		name: 'time-warrior',
		short_description: {
			de: '2D-Top-Down-Spielprototyp',
			en: '2d top-down game prototype'
		},
		description: {
			de: 'Dies ist ein weiteres unvollendetes Spiel, in dem Gegner in verschiedenen Räumen besiegt werden müssen - im Stil von Binding of Isaac. Es gibt auch die Möglichkeit, die Zeit zu verlangsamen und durch die Feinde zu rasen. Ich hatte geplant, mehr Räume, Feinde und Bosse hinzuzufügen, aber ich bin nie dazu gekommen.',
			en: 'This is another unfinished game, where you have to kill enemy in different rooms - binding of isaac style. You also have the ability to slow time and dash through your enemies. I was planning to add more rooms, enemies and bosses, but I never got to it.'
		},
		date: '2020',
		live: 'https://sch-28.github.io/time-warrior/',
		github: 'https://github.com/sch-28/time-warrior'
	},
	{
		name: 'stealthy-turn',
		short_description: {
			de: 'Strategisches rundenbasiertes Stealth-Spielprototyp',
			en: 'strategy turn-based stealth game protoype'
		},
		description: {
			de: 'Dieses Browser-/Mobile-Spiel ist ein Prototyp für ein rundenbasiertes Stealth-Spiel. Alles, was Sie tun können, ist sich zu bewegen, darauf zu achten, nicht erwischt zu werden, und die Feinde zu eliminieren, indem Sie auf sie zugehen. Es enthält einige Level.',
			en: 'This browser/mobile game is a prototype for a turn-based stealth game. All you can do is move, be aware to not get caught and eliminate the enemies by walking onto them. It features a couple of levels.'
		},
		date: '2020',
		live: 'https://sch-28.github.io/stealthy-turn/',
		github: 'https://github.com/sch-28/stealthy-turn'
	},
	{
		name: 'clever-cars',
		short_description: {
			de: 'Pfadfindung mit TensorFlow',
			en: 'pathfinding trained with tensorflow'
		},
		description: {
			de: 'Mithilfe von tensorflow.js habe ich ein Tool erstellt, um ein neuronales Netzwerk zu trainieren, das von selbst fahren kann. Es verwendet einen einfachen Neuroevolutionsalgorithmus, um das Netzwerk weiterzuentwickeln. Die trainierten Autos sind in der Lage, auf einer Strecke zu fahren, die vom Benutzer gezeichnet werden kann.',
			en: 'Utilizing tensorflow.js I created a tool to train a neural network that can drive on its own. It is using a simple neuroevolution algorithm to evolve the network. The trained cars are able to drive through a track that can be drawn by the user.'
		},
		date: '2019',
		live: 'https://sch-28.github.io/clever-cars/',
		github: 'https://github.com/sch-28/clever-cars'
	}
] as const;
