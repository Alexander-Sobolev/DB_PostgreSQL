import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createNewExercise, getExercises } from './exercise.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)

export default router
