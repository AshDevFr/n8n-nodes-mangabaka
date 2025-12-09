import type { IDataObject } from 'n8n-workflow';

export function removeEmptyProps(obj: IDataObject): IDataObject {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (value !== undefined && value !== null && value !== '') {
			acc[key] = value;
		}
		return acc;
	}, {} as IDataObject);
}
