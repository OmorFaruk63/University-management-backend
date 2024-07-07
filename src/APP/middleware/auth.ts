import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";
import { User } from "../modules/user/user.model";
import { TUserRole } from "../modules/user/user.interface";
const auth = (...requiredRoles: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // checking if the token is missing
    if (!token) {
      throw new Error("The user is not authentic");
    }
    // checking if the given token is valid
    const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
    
    const { name, role } = decoded;

    // checking if the user is exist
    // const user = await User.isUserExistsByCustomId(name);
    // if (!user) {
    //   throw new Error("The user is not exits");
    // }

    if ( requiredRoles && !requiredRoles.includes(role)) {
      throw new Error("you  are not authorized");
    }
    next();
  };
};

export default auth;
