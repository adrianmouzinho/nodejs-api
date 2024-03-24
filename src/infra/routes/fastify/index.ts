import type { FastifyPluginAsync } from 'fastify'

import { createSignUpFactory } from 'application/modules/sign-up/use-cases/create-sign-up/create-sign-up-factory'
import { adaptRouteFastify } from '../../adapter/adapt-route-fastify'

export const signUpRouter: FastifyPluginAsync = async (app): Promise<void> => {
	app.post('/sign-up', adaptRouteFastify(createSignUpFactory()))
}
