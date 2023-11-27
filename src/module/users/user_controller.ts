import { NextFunction, Request, Response } from 'express'
import studentSchemaValidation from '../student/student_validation'
import { userService } from './user_service'
import sendResponce from '../middelware/utils/server_responce'
import httpStatus from 'http-status'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body
    //   const zodValidation = studentSchemaValidation.parse(student)
    const result = await userService.createStudentToDb(password, student)
    sendResponce(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createStudent,
}
