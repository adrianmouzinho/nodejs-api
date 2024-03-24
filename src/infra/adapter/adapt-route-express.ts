import type { Request, Response } from 'express'

import type { IController } from '../shared/protocols/controller'
import type { HttpRequest } from '../shared/protocols/http'

export function adaptRouteExpress(controller: IController) {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
		}

		const httpResponse = await controller.handle(httpRequest)

		res.status(httpResponse.statusCode).json(httpResponse.body)
	}
}
