import { Router } from 'express'

import { createSignUpFactory } from 'application/modules/sign-up/use-cases/create-sign-up/create-sign-up-factory'
import { adaptRouteExpress } from '../../adapter/adapt-route-express'

const signUpRoutes = Router()

signUpRoutes.post('/sign-up', adaptRouteExpress(createSignUpFactory()))

export { signUpRoutes }
