import 'dotenv/config'

const express = './infra/ports/express'
const fastify = './infra/ports/fastify'

const server = process.env.SERVER_TYPE === 'express' ? express : fastify

require(server)
