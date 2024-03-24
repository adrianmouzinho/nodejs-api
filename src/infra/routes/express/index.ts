import { Router } from 'express'

import { signUpRoutes } from './sign-up.routes'

const router = Router()

router.use('/v1', signUpRoutes)

export { router }
