import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSeriesGet = {
	operation: ['get'],
	resource: ['series'],
};

export const seriesGetDescription: INodeProperties[] = [
	{
		displayName: 'Full Details',
		name: 'fullDetails',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForSeriesGet,
		},
		description: 'Whether to retrieve full series details including volumes and chapters',
	},
];
