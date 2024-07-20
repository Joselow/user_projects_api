import express from 'express'
import morgan from 'morgan'
import { router } from './routes/index.js'

export const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(router)