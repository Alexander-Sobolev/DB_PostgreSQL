import colors from 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import authRoutes from './App/auth/auth.routes.js'
import { prisma } from './App/prisma.js'
import { errorHandler, notFound } from './App/middleware/error.middleware.js'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5001

	app.listen(
		PORT,
		console.log(
			`🚀 Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
				.green.bold
		)
	)
}

main().then(async () => {
	await prisma.$disconnect()
	})
.catch(async (e) => {
	console.error(e)
	await prisma.$disconnect()
	process.exit(1)
})