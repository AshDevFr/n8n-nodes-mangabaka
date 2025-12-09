import type { INodeProperties } from 'n8n-workflow';
import { multiOptionsToRepeatedParams } from '../../shared/utils';

const showOnlyForNewsList = {
	operation: ['list'],
	resource: ['news'],
};

export const newsListDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForNewsList,
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				default: 50,
				description: 'Max number of results to return',
				routing: {
					send: {
						type: 'query',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Only Primary',
				name: 'only_primary',
				type: 'boolean',
				default: true,
				description: 'Whether to only show primary news items',
				routing: {
					send: {
						type: 'query',
						property: 'only_primary',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 1,
				description: 'Page number for pagination',
				routing: {
					send: {
						type: 'query',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'multiOptions',
				default: [],
				description: 'Filter by news type',
				options: [
					{ name: 'Default', value: 'default' },
					{ name: 'Releases', value: 'releases' },
					{ name: 'Review', value: 'review' },
				],
				routing: {
					send: {
						preSend: [multiOptionsToRepeatedParams('type')],
					},
				},
			},
		],
	},
];
