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
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		requestOptions.headers = {
			...requestOptions.headers,
			'x-api-key': credentials.apiKey as string,
		};

		return requestOptions;
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.mangabaka.dev',
			url: '/v1/my/library',
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		},
	};
}
