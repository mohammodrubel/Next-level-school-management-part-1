import { NextFunction, Request, Response } from 'express'
import { studentService } from './student_service'
import sendResponce from '../middelware/utils/server_responce'
import httpStatus from 'http-status'

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudents()
    sendResponce(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'students show successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    console.log(id)
    const result = await studentService.getSingleStudentService(id)
    sendResponce(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student show successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await studentService.DeleteStudentService(id)
    sendResponce(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student Delete successfull',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
