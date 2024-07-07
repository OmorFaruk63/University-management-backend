import jwt from "jsonwebtoken";
import config from "../config/config";
import { User } from "../modules/user/user.model";
const auth = (...requiredRoles) => {
    return async (req, res, next) => {
        const token = req.headers.authorization;
        // checking if the token is missing
        if (!token) {
            throw new Error("The user is not authentic");
        }
        // checking if the given token is valid
        const decoded = jwt.verify(token, config.jwt_secret);
        const { name, role } = decoded;
        // checking if the user is exist
        const user = await User.isUserExistsByCustomId(name);
        if (!user) {
            throw new Error("The user is not exits");
        }
        if (!requiredRoles.includes(role)) {
            throw new Error("you  are not authorized");
        }
        next();
    };
};
export default auth;
