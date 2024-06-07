import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    res.send({
      statusCode: 200,
      success: true,
      message: "Student is created succesfully",
      data: result,
    });
  } catch (err) {
    res.send({
      statusCode: 500,
      success: false,
      message: "Student is created Failed",
      err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
