import fastify from 'fastify'

import { signUpRouter } from '../../routes/fastify'

const PORT = process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 3333

const app = fastify()

app.register(signUpRouter, { prefix: '/v1' })

async function start() {
	try {
		await app.listen({
			host: '0.0.0.0',
			port: PORT,
		})
		console.log(`Fastify HTTP server running on port ${PORT}`)
	} catch (err) {
		console.error('Erro server fastify', err)
	}
}

start()
