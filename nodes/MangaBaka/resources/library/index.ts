import type { INodeProperties } from 'n8n-workflow';
import { seriesSelect } from '../../shared/descriptions';
import { libraryListDescription } from './list';
import { libraryGetDescription } from './get';
import { libraryCreateDescription } from './create';
import { libraryUpdateDescription } from './update';
import { libraryDeleteDescription } from './delete';

const showOnlyForLibrary = {
	resource: ['library'],
};

export const libraryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLibrary,
		},
		options: [
			{
				name: 'Add Series',
				value: 'create',
				action: 'Add a series to library',
				description: 'Add a series to your library',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/my/library/{{$parameter.seriesId}}',
					},
				},
			},
			{
				name: 'Get Series Status',
				value: 'get',
				action: 'Get series status in library',
				description: 'Get the status of a series in your library',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/my/library/{{$parameter.seriesId}}',
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
				name: 'List',
				value: 'list',
				action: 'List library series',
				description: 'List all series in your library',
				routing: {
					request: {
						method: 'GET',
						url: '/v1/my/library',
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
				name: 'Remove Series',
				value: 'delete',
				action: 'Remove a series from library',
				description: 'Remove a series from your library',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/my/library/{{$parameter.seriesId}}',
					},
				},
			},
			{
				name: 'Update Series',
				value: 'update',
				action: 'Update series in library',
				description: 'Update a series status in your library',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/v1/my/library/{{$parameter.seriesId}}',
					},
				},
			},
		],
		default: 'list',
	},
	{
		...seriesSelect,
		displayOptions: {
			show: {
				...showOnlyForLibrary,
				operation: ['get', 'create', 'update', 'delete'],
			},
		},
	},
	...libraryListDescription,
	...libraryGetDescription,
	...libraryCreateDescription,
	...libraryUpdateDescription,
	...libraryDeleteDescription,
];
