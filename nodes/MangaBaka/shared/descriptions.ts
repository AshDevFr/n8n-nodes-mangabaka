import type { INodeProperties } from 'n8n-workflow';

export const seriesSelect: INodeProperties = {
	displayName: 'Series',
	name: 'seriesId',
	type: 'resourceLocator',
	default: {
		mode: 'id',
		value: '',
	},
	required: true,
	modes: [
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g. 84926',
		},
	],
};
