import roomServices from "./room.service";
const createRoom = (req, res) => {
    const { roomData } = req.body;
    roomServices.insertRoomInfoInBD(roomData, res);
};
const getSingleRoom = (req, res) => {
    const { id } = req.params;
    roomServices.getSingleRoomFromBD(id, res);
};
const getAllRoom = (req, res) => {
    roomServices.getAllRoomFromBD(res);
};
const updateRoom = (req, res) => {
    const { id } = req.params;
    roomServices.updateSingleRoom(id, req.body, res);
};
const deleteRoom = (req, res) => {
    const { id } = req.params;
    roomServices.deleteRoomFromBD(id, res);
};
const roomController = {
    createRoom,
    getSingleRoom,
    getAllRoom,
    updateRoom,
    deleteRoom,
};
export default roomController;
