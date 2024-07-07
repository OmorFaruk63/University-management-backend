import bookingServices from "./booking.service";
const createBookingController = (req, res) => {
    const { bookingData } = req.body;
    bookingServices.inserBookingInDB(bookingData, res);
};
const getAllBookingController = (req, res) => {
    bookingServices.getAllBookingFromDB(res);
};
const getAllUserBookingController = (req, res) => {
    bookingServices.getAllUserBookingFromDB(res);
};
const updateBookingController = (req, res) => {
    const { updateData } = req.body;
    const { id } = req.params;
    bookingServices.updateBookingFromDB(id, updateData, res);
};
const bookingController = {
    createBookingController,
    getAllBookingController,
    getAllUserBookingController,
    updateBookingController,
};
export default bookingController;
