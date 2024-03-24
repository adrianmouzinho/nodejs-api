import type { FastifyReply, FastifyRequest } from 'fastify'

import type { IController } from '../shared/protocols/controller'
import type { HttpRequest } from '../shared/protocols/http'

export function adaptRouteFastify(controller: IController) {
	return async (req: FastifyRequest, res: FastifyReply) => {
		const httpRequest: HttpRequest = {
			body: req.body,
		}

		const httpResponse = await controller.handle(httpRequest)

		res.status(httpResponse.statusCode).send(httpResponse.body)
	}
}
