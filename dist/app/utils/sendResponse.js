// type TResponse<T> = {
//   status: number;
//   success: boolean;
//   message: string;
//   data: T;
// };
export const sendResponse = (res, data) => {
    res.status(data.status).json({
        status: data.status,
        success: data.success,
        data: data.data,
    });
};
