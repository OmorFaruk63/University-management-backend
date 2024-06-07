import { TStudent } from "./student.interface";
import { Student } from "./student.model";

// const createStudentFromDB = async (student: TStudent) => {
//   const result = await Student.create(student);
//   return result;
// };

const getAllStudentsFromDB = async () => {
  const result = await Student.find({});
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};

// const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
//   const { name, guardian, localGuardian, ...remainingStudentData } = payload;

//   const modifiedUpdatedData: Record<string, unknown> = {
//     ...remainingStudentData,
//   };

//   if (name && Object.keys(name).length) {
//     for (const [key, value] of Object.entries(name)) {
//       modifiedUpdatedData[`name.${key}`] = value;
//     }
//   }

//   if (guardian && Object.keys(guardian).length) {
//     for (const [key, value] of Object.entries(guardian)) {
//       modifiedUpdatedData[`guardian.${key}`] = value;
//     }
//   }

//   if (localGuardian && Object.keys(localGuardian).length) {
//     for (const [key, value] of Object.entries(localGuardian)) {
//       modifiedUpdatedData[`localGuardian.${key}`] = value;
//     }
//   }

//   console.log(modifiedUpdatedData);

//   const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  // createStudentFromDB,
  getAllStudentsFromDB,
  deleteStudentFromDB,
  getSingleStudentFromDB,
};
