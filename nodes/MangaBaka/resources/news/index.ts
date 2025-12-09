import type { INodeProperties } from 'n8n-workflow';
import { newsListDescription } from './list';

export const newsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['news'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'Get latest news',
				action: 'Get latest news',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/news',
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
	...newsListDescription,
];
