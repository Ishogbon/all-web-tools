import { type FractionProps } from '../components/components-small-assets/fractions';

export interface ErrorResponse {
    status: 'ERROR'
    code?: string
    description: string
}

export interface SuccessResponse {
    status: 'SUCCESS'
    code?: string
    description: string
    result: string | number | boolean | any[] | FractionProps
}

export const FETCH_RESOURCE_API = async (apiUrl: string, method: 'GET' | 'POST' = 'GET', parameters: [] | Record<string, any>, contentType: 'application/json' | 'application/x-www-form-urlencoded' = 'application/json'): Promise<ErrorResponse | SuccessResponse> => {
    if (Array.isArray(parameters)) {
        for (const PARAMETER of parameters) {
            apiUrl += `/${String(PARAMETER)}`;
        }
        const RESPONSE = await fetch(apiUrl);
        return await RESPONSE.json();
    } /* It's generally considered a 'not so good' idea to put bodies on GET requests, so i'm going to honor that */ else {
        let params = '';
        Object.keys(parameters).forEach((parameterKey, index) => {
            if (index === 0) {
                params += `${parameterKey}=${String(parameters[parameterKey])}`;
            } else {
                params += `&${parameterKey}=${String(parameters[parameterKey])}`;
            }
        });
        if (method === 'GET') {
            apiUrl += '?' + params;
            const RESPONSE = await fetch(apiUrl);
            return await RESPONSE.json();
        } else {
            const BODY = contentType === 'application/json' ? JSON.stringify(parameters) : params;
            const RESPONSE = await fetch(apiUrl, {
                method,
                headers: {
                    'Content-Type': contentType
                },
                body: BODY
            });
            return await RESPONSE.json();
        }
    }
};
