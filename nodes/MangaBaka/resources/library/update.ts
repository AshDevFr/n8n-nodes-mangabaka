import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLibraryUpdate = {
	operation: ['update'],
	resource: ['library'],
};

export const libraryUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Series ID',
		name: 'seriesId',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForLibraryUpdate,
		},
		description: 'The series ID to update in your library',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForLibraryUpdate,
		},
		options: [
			{
				displayName: 'Finish Date',
				name: 'finish_date',
				type: 'string',
				default: '',
				description: 'Date finished reading (ISO date string)',
				routing: {
					send: {
						type: 'body',
						property: 'finish_date',
					},
				},
			},
			{
				displayName: 'Is Private',
				name: 'is_private',
				type: 'boolean',
				default: false,
				description: 'Whether this library entry should be private',
				routing: {
					send: {
						type: 'body',
						property: 'is_private',
					},
				},
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Personal notes about this series',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Number of Rereads',
				name: 'number_of_rereads',
				type: 'number',
				default: 0,
				description: 'How many times you have reread this series',
				routing: {
					send: {
						type: 'body',
						property: 'number_of_rereads',
					},
				},
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'number',
				typeOptions: {
					minValue: 11,
					maxValue: 30,
				},
				default: 20,
				description: 'Priority level for this series (11-30)',
				routing: {
					send: {
						type: 'body',
						property: 'priority',
					},
				},
			},
			{
				displayName: 'Progress Chapter',
				name: 'progress_chapter',
				type: 'number',
				default: undefined,
				description: 'Current chapter progress',
				routing: {
					send: {
						type: 'body',
						property: 'progress_chapter',
					},
				},
			},
			{
				displayName: 'Progress Volume',
				name: 'progress_volume',
				type: 'number',
				default: undefined,
				description: 'Current volume progress',
				routing: {
					send: {
						type: 'body',
						property: 'progress_volume',
					},
				},
			},
			{
				displayName: 'Rating',
				name: 'rating',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
				default: undefined,
				description: 'Your rating for this series (0-100)',
				routing: {
					send: {
						type: 'body',
						property: 'rating',
					},
				},
			},
			{
				displayName: 'Read Link',
				name: 'read_link',
				type: 'string',
				default: '',
				description: 'URL where you read this series',
				routing: {
					send: {
						type: 'body',
						property: 'read_link',
					},
				},
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'Date started reading (ISO date string)',
				routing: {
					send: {
						type: 'body',
						property: 'start_date',
					},
				},
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'options',
				default: 'reading',
				description: 'Reading state for this series',
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
						type: 'body',
						property: 'state',
					},
				},
			},
		],
	},
];
