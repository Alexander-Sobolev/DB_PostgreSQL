import express from 'express'

import { authUser } from './auth.controller.js'
import { registerUser } from './auth.controller.js'

const router = express.Router()

router.route('/login').post(authUser)
router.route('/register').post(registerUser)

export default router
