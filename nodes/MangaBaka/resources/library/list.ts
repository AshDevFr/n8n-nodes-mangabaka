import type { INodeProperties } from 'n8n-workflow';
import { multiOptionsToRepeatedParams } from '../../shared/utils';

const showOnlyForLibraryList = {
	operation: ['list'],
	resource: ['library'],
};

export const libraryListDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForLibraryList,
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
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
				displayName: 'Query',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search query within library',
				routing: {
					send: {
						type: 'query',
						property: 'q',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'options',
				default: 'default',
				description: 'How to sort the results',
				options: [
					{ name: 'Available Chapters (High to Low)', value: 'available_chapters_desc' },
					{ name: 'Available Chapters (Low to High)', value: 'available_chapters_asc' },
					{ name: 'Created At (Newest First)', value: 'created_at_desc' },
					{ name: 'Created At (Oldest First)', value: 'created_at_asc' },
					{ name: 'Default', value: 'default' },
					{ name: 'My Rating (High to Low)', value: 'my_rating_desc' },
					{ name: 'My Rating (Low to High)', value: 'my_rating_asc' },
					{ name: 'Series Rating (High to Low)', value: 'series_rating_desc' },
					{ name: 'Series Rating (Low to High)', value: 'series_rating_asc' },
					{ name: 'Series Title (A-Z)', value: 'series_title_asc' },
					{ name: 'Series Title (Z-A)', value: 'series_title_desc' },
					{ name: 'Updated At (Newest First)', value: 'updated_at_desc' },
					{ name: 'Updated At (Oldest First)', value: 'updated_at_asc' },
				],
				routing: {
					send: {
						type: 'query',
						property: 'sort_by',
					},
				},
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'multiOptions',
				default: [],
				description: 'Filter by library entry state',
				options: [
					{ name: 'Completed', value: 'completed' },
					{ name: 'Considering', value: 'considering' },
					{ name: 'Dropped', value: 'dropped' },
					{ name: 'Paused', value: 'paused' },
					{ name: 'Plan to Read', value: 'plan_to_read' },
					{ name: 'Reading', value: 'reading' },
					{ name: 'Rereading', value: 'rereading' },
				],
				routing: {
					send: {
						preSend: [multiOptionsToRepeatedParams('state')],
					},
				},
			},
		],
	},
];
