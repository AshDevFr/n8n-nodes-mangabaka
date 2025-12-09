import type { IDataObject, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

export function removeEmptyProps(obj: IDataObject): IDataObject {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			acc[key] = value;
		}
		return acc;
	}, {} as IDataObject);
}

/**
 * Helper to convert array parameter to repeated query parameters
 * Example: multiOptionsToRepeatedParams('type') converts ['manga', 'novel']
 * to query string: type=manga&type=novel (instead of type[0]=manga&type[1]=novel)
 */
export function multiOptionsToRepeatedParams(parameterName: string) {
	return async function (
		this: IExecuteSingleFunctions,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		const values = this.getNodeParameter(`additionalFields.${parameterName}`) as string[];

		if (Array.isArray(values) && values.length > 0) {
			requestOptions.qs ??= {};

			// Build the query string manually for this parameter to avoid array indexing
			const currentUrl = requestOptions.url || '';
			const separator = currentUrl.includes('?') ? '&' : '?';
			const queryParams = values.map((v) => `${parameterName}=${encodeURIComponent(v)}`).join('&');

			// Append to URL instead of using qs object
			requestOptions.url = `${currentUrl}${separator}${queryParams}`;

			// Remove from qs if it exists to avoid duplication
			delete requestOptions.qs[parameterName];
		}

		return requestOptions;
	};
}
