import type { INodeProperties } from 'n8n-workflow';
import { seriesSelect } from '../../shared/descriptions';
import { seriesGetDescription } from './get';
import { seriesSearchDescription } from './search';
import { seriesBatchDescription } from './batch';
import { seriesRelatedDescription } from './related';
import { seriesNewsDescription } from './news';

const showOnlyForSeries = {
	resource: ['series'],
};

export const seriesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSeries,
		},
		options: [
			{
				name: 'Batch Get',
				value: 'batch',
				action: 'Get multiple series',
				description: 'Retrieve multiple series by their IDs',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/series/batch',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a series',
				description: 'Get the data of a single series',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/series/{{$parameter.seriesId}}',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Full',
				value: 'getFull',
				action: 'Get full series details',
				description: 'Get complete series information including volumes and chapters',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/series/{{$parameter.seriesId}}/full',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get News',
				value: 'getNews',
				action: 'Get series news',
				description: 'Get news related to a series',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/series/{{$parameter.seriesId}}/news',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Related',
				value: 'getRelated',
				action: 'Get related series',
				description: 'Get series related to a specific series',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/series/{{$parameter.seriesId}}/related',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data',
								},
							},
						],
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search series',
				description: 'Search for series by title',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/series/search',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'data',
								},
							},
						],
					},
				},
			},
		],
		default: 'get',
	},
	{
		...seriesSelect,
		displayOptions: {
			show: {
				...showOnlyForSeries,
				operation: ['get', 'getFull', 'getNews', 'getRelated'],
			},
		},
	},
	...seriesGetDescription,
	...seriesSearchDescription,
	...seriesBatchDescription,
	...seriesRelatedDescription,
	...seriesNewsDescription,
];
