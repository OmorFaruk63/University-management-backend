import httpStatus from "http-status";
const notFound = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        statusCode: 404,
        message: "Data Found",
        data: [],
    });
    next();
};
export default notFound;
