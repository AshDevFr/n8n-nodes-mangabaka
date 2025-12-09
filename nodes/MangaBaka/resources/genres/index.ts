import type { INodeProperties } from 'n8n-workflow';
import { genresListDescription } from './list';

const showOnlyForGenres = {
	resource: ['genres'],
};

export const genresDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForGenres,
		},
		options: [
			{
				name: 'List',
				value: 'list',
				action: 'List genres',
				description: 'List all available genres',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/genres',
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
		default: 'list',
	},
	...genresListDescription,
];
