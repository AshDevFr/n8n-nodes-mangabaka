import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { seriesDescription } from './resources/series';
import { libraryDescription } from './resources/library';
import { genresDescription } from './resources/genres';

export class MangaBaka implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MangaBaka',
		name: 'mangaBaka',
		icon: { light: 'file:../../icons/mangabaka.svg', dark: 'file:../../icons/mangabaka.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the MangaBaka API',
		defaults: {
			name: 'MangaBaka',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'mangaBakaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.mangabaka.dev',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Genre',
						value: 'genres',
					},
					{
						name: 'Library',
						value: 'library',
					},
					{
						name: 'Series',
						value: 'series',
					},
				],
				default: 'series',
			},
			...seriesDescription,
			...libraryDescription,
			...genresDescription,
		],
	};
}
