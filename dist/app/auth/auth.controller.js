import authServices from "./auth.service";
const userSignUp = (req, res) => {
    const { userInfo } = req.body;
    authServices.inserUserInfoInDB(userInfo, res);
};
const userLogin = (req, res) => {
    const { userInfo } = req.body;
    authServices.authenticUserLogin(userInfo, res);
};
const authController = {
    userSignUp,
    userLogin,
};
export default authController;
