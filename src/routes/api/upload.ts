import type { Request, SKResponse as Response } from '@sveltejs/kit/types.internal';

export async function post(request: Request, context: any): Promise<Partial<Response>> {
	return {
		body: {
			hello: 'world'
		}
	};
}
