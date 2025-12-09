import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSeriesBatch = {
	operation: ['batch'],
	resource: ['series'],
};

export const seriesBatchDescription: INodeProperties[] = [
	{
		displayName: 'Series IDs',
		name: 'seriesIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSeriesBatch,
		},
		description: 'Comma-separated list of series IDs to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'ids',
			},
		},
	},
];
