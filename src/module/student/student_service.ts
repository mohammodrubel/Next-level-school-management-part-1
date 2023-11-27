import StudentModel from './student_model'

const getAllStudents = async () => {
  const result = StudentModel.find({ isDeleted: { $ne: true } })
  return result
}

const getSingleStudentService = async (id: string) => {
  const result = await StudentModel.aggregate([
    { $match: { id: id } },
    { $match: { isDeleted: { $ne: true } } },
  ])
  return result
}

const DeleteStudentService = async (id: string) => {
  const result = await StudentModel.updateOne({ id: id }, { isDeleted: true })
  return result
}

export const studentService = {
  getAllStudents,
  getSingleStudentService,
  DeleteStudentService,
}
