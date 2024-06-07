import config from "../../config";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";

import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = "student";

  //set manually generated it
  userData.id = "203qq0100001";

  // create a user
  const newUser = await User.create(userData);

  //create a student

  // console.log(studentData, "sasas");
  // set id , _id as user
  studentData.id = await newUser.id;
  studentData.user = newUser._id;
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
