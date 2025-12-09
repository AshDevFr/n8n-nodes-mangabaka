import type {
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';

export class MangaBakaApi implements ICredentialType {
	name = 'mangaBakaApi';

	displayName = 'MangaBaka API';

	icon: Icon = 'file:../icons/mangabaka.svg';

	documentationUrl = 'https://mangabaka.org/api';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Personal Access Token (PAT) starting with "mb-"',
			placeholder: 'mb-...',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.mangabaka.dev',
			required: true,
			description: 'Base URL for the MangaBaka API (useful for self-hosted instances or debugging)',
			placeholder: 'https://api.mangabaka.dev',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		requestOptions.headers = {
			...requestOptions.headers,
			'x-api-key': credentials.apiKey as string,
		};

		// Override baseURL if provided in credentials
		if (credentials.baseUrl) {
			requestOptions.baseURL = credentials.baseUrl as string;
		}

		return requestOptions;
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/v1/my/library',
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		},
	};
}
