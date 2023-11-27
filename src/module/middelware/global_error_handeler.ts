import express, { Application, NextFunction, Request, Response } from 'express'
const globalErrorHandeler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  })
}

export default globalErrorHandeler
