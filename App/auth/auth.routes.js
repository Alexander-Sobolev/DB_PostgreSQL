import express from 'express'
import { authUser } from './auth.controller.js'

const router = express.Router()

router.route('/login').post(authUser)

export default router