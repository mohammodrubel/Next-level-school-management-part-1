import { Types } from 'mongoose'

export type Guardian = {
  fathersName: string
  fathersOccupation: string
  fathersContactNumber: string
  mothersName: string
  mothersOccupation: string
  mothersContactNumber: string
}
export type UserName = {
  firstName: string
  middelName: string
  lastName: string
}
export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type Tstudent = {
  id: string
  user: Types.ObjectId
  password: string
  name: UserName
  gender: 'male' | 'female' | 'others'
  dateOfBirth: string
  email: string
  contactNumber: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  parmanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImage: string
  isDeleted: boolean
}
