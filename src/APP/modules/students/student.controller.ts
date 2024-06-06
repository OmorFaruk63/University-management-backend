import { Request, RequestHandler, Response } from "express";
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
const getSingleStudent: RequestHandler = async (req, res) => {
  const { studentId } = req.params;
  try {
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.send({
      statusCode: 200,
      success: true,
      message: "Student is retrieved succesfully",
      data: result,
    });
  } catch (error) {
    res.send({
      statusCode: 500,
      success: false,
      message: "Student is retrieved failed",
      error,
    });
  }
};

const getAllStudents: RequestHandler = async (req, res) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.send({
      statusCode: 200,
      success: true,
      message: "Student are retrieved succesfully",
      data: result,
    });
  } catch (error) {
    res.send({
      statusCode: 500,
      success: false,
      message: "Student are retrieved Failed",
      error,
    });
  }
};

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

const deleteStudent: RequestHandler = async (req, res) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.send({
      statusCode: 200,
      success: true,
      message: "Student is deleted succesfully",
      data: result,
    });
  } catch (error) {
    res.send({
      statusCode: 200,
      success: false,
      message: "Student is deleted Failed",
      error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  deleteStudent,
  getSingleStudent,
};
