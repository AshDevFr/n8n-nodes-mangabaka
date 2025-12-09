import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSourceGet = {
	operation: ['get'],
	resource: ['source'],
};

export const sourceGetDescription: INodeProperties[] = [
	{
		displayName: 'Source',
		name: 'sourceType',
		type: 'options',
		required: true,
		default: 'anilist',
		displayOptions: {
			show: showOnlyForSourceGet,
		},
		description: 'The source platform to query',
		options: [
			{ name: 'AniList', value: 'anilist' },
			{ name: 'Anime-Planet', value: 'anime-planet' },
			{ name: 'Kitsu', value: 'kitsu' },
			{ name: 'Manga Updates', value: 'manga-updates' },
			{ name: 'MyAnimeList', value: 'my-anime-list' },
		],
	},
	{
		displayName: 'Source ID',
		name: 'sourceId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showOnlyForSourceGet,
		},
		description: 'The ID from the source platform',
		routing: {
			request: {
				url: '=/v1/source/{{$parameter.sourceType}}/{{$parameter.sourceId}}',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForSourceGet,
		},
		options: [
			{
				displayName: 'With Internal',
				name: 'with_internal',
				type: 'boolean',
				default: false,
				description: 'Whether to include MangaBaka internally processed data',
				routing: {
					send: {
						type: 'query',
						property: 'with_internal',
					},
				},
			},
			{
				displayName: 'With Merged Series',
				name: 'with_merged_series',
				type: 'boolean',
				default: false,
				description: 'Whether to include merged MangaBaka series instead of only active ones',
				routing: {
					send: {
						type: 'query',
						property: 'with_merged_series',
					},
				},
			},
			{
				displayName: 'With Series',
				name: 'with_series',
				type: 'boolean',
				default: true,
				description: 'Whether to include MangaBaka series matching the source ID',
				routing: {
					send: {
						type: 'query',
						property: 'with_series',
					},
				},
			},
			{
				displayName: 'With Source Response',
				name: 'with_source_response',
				type: 'boolean',
				default: false,
				description: 'Whether to include the raw API response from the source',
				routing: {
					send: {
						type: 'query',
						property: 'with_source_response',
					},
				},
			},
		],
	},
];
