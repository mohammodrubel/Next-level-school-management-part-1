import { Schema, model } from 'mongoose'
import {
  Tstudent,
  UserName,
  Guardian,
  LocalGuardian,
} from './student_interface'
import { boolean, object, string, enum as zEnum } from 'zod'

// Define enums
const genderEnum = zEnum(['male', 'female', 'others'])
const bloodGroupEnum = zEnum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
const statusEnum = zEnum(['active', 'inActive'])

// Zod validation schema for UserName
const userNameSchema = object({
  firstName: string(),
  middelName: string({ required_error: 'Middle name is required' }),
  lastName: string({ required_error: 'Last name is required' }),
})

// Zod validation schema for Guardian
const guardianSchema = object({
  fathersName: string(),
  fathersOccupation: string(),
  fathersContactNumber: string(),
  mothersName: string(),
  mothersOccupation: string(),
  mothersContactNumber: string(),
})

// Zod validation schema for LocalGuardian
const localGuardianSchema = object({
  name: string(),
  occupation: string(),
  contactNo: string(),
  address: string(),
})

// Zod validation schema for Tstudent
const studentSchemaValidation = object({
  id: string({ required_error: 'ID is required' }),
  password: string(),
  name: userNameSchema,
  gender: genderEnum,
  dateOfBirth: string(),
  email: string(),
  contactNumber: string(),
  bloodGroup: bloodGroupEnum,
  presentAddress: string(),
  parmanentAddress: string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: string(),
  isActive: statusEnum.default('active'),
  isDeleted: boolean().default(false),
})

export default studentSchemaValidation
