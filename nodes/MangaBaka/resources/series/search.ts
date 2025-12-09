import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSeriesSearch = {
	operation: ['search'],
	resource: ['series'],
};

export const seriesSearchDescription: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSeriesSearch,
		},
		description: 'Search query for series title',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		displayOptions: {
			show: showOnlyForSeriesSearch,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
];
