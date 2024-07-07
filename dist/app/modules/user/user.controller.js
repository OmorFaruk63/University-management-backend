import userService from "./user.service";
const createAdmin = (req, res) => {
    const { adminData } = req.body;
    userService.insertAdminInfoInDB(adminData, res);
};
const createUser = (req, res) => {
    const { userData } = req.body;
    userService.insertUserInfoInDB(userData, res);
};
const userController = {
    createAdmin,
    createUser,
};
export default userController;
