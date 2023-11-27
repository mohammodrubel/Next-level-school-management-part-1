import { Schema, model } from 'mongoose'
import {
  Tstudent,
  UserName,
  Guardian,
  LocalGuardian,
} from './student_interface'
import bcrypt from 'bcrypt'
import { NextFunction } from 'express'
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middelName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fathersOccupation: {
    type: String,
    required: true,
  },
  fathersContactNumber: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mothersOccupation: {
    type: String,
    required: true,
  },
  mothersContactNumber: {
    type: String,
    required: true,
  },
})
const localeGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})
const studentSchema = new Schema<Tstudent>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  password: {
    type: String,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female', 'others'],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localeGuardianSchema,
  profileImage: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const StudentModel = model<Tstudent>('Student', studentSchema)
export default StudentModel
