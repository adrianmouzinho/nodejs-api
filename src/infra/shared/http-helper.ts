import type { HttpResponse } from './protocols/http'

export function create(data: unknown): HttpResponse {
	return {
		statusCode: 201,
		body: data,
	}
}
