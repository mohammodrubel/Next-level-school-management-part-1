import express from 'express'
import { studentController } from './student_controller'
const router = express.Router()

// router.post('/create-student',studentController.createStudent)
router.get('/create-student', studentController.getAllStudents)
router.get('/create-student/:id', studentController.getSingleStudent)
router.delete('/create-student/:id', studentController.deleteStudent)

export default router
