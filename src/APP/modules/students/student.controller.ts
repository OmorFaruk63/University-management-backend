import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentServices.createStudentFromDB(student);

    res.send({
      statusCode: 200,
      success: true,
      message: "Student Create succesfully",
      data: result,
    });
  } catch (error) {
    res.send({
      statusCode: 500,
      success: false,
      message: "Student Create Failed",
      error,
    });
  }
};
// const getSingleStudent = catchAsync(async (req, res) => {
//   const { studentId } = req.params;
//   const result = await StudentServices.getSingleStudentFromDB(studentId);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Student is retrieved succesfully",
//     data: result,
//   });
// });

// const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
//   const result = await StudentServices.getAllStudentsFromDB(req.query);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Student are retrieved succesfully",
//     data: result,
//   });
// });

// const updateStudent = catchAsync(async (req, res) => {
//   const { studentId } = req.params;
//   const { student } = req.body;
//   const result = await StudentServices.updateStudentIntoDB(studentId, student);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Student is updated succesfully",
//     data: result,
//   });
// });

// const deleteStudent = catchAsync(async (req, res) => {
//   const { studentId } = req.params;
//   const result = await StudentServices.deleteStudentFromDB(studentId);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Student is deleted succesfully",
//     data: result,
//   });
// });

export const StudentControllers = {
  createStudent,
};
