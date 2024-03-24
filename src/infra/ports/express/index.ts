import express from 'express'

import { router } from '../../routes/express'

const PORT = process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 3333

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => {
	console.log(`Express HTTP server running on port ${PORT}`)
})

export { app }
