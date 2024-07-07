import slotService from "./slot.service";
const createSlotController = (req, res) => {
    const { slotData } = req.body;
    slotService.inserSlotInDB(slotData, res);
};
const getAllSlotController = (req, res) => {
    const { slotsData } = req.body;
    slotService.getAllSlotsFromDB(slotsData.isBooked, res);
};
const slotController = {
    createSlotController,
    getAllSlotController,
};
export default slotController;
