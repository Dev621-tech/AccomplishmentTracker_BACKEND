import Accomplishment from "../Models/accomplishmentSchema.js";

const showAllAccomplishments = (async (req, res) => {
    let allAccomplishments = await Accomplishment.find({});

    res.json(allAccomplishments);
});

const createANewAccomplishment = (async (req, res) => {
    let newAccomplishment = await Accomplishment.create(req.body);

    res.json(newAccomplishment);
});

const updateAccomplishment = (async (req, res) => {
    let updatedAccomplishment = await Accomplishment.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedAccomplishment) return res.status(404).json({ error: "Accomplishment NOT FOUND !" });

    res.json(updatedAccomplishment);
});

const deleteAccomplishment = (async (req, res) => {
    let deletedAccomplishment = await Accomplishment.findByIdAndDelete(req.params.id);

    if (!deletedAccomplishment) return res.status(404).json({ error: "Accomplishment NOT FOUND !" });

    res.json(deletedAccomplishment);
});

const showOneAccomplishment = (async (req, res) => {
    let oneAccomplishment = await Accomplishment.findById(req.params.id);

    if (!oneAccomplishment) return res.status(404).json({ error: "Accomplishment NOT FOUND !" });

    res.json(oneAccomplishment);
});

export default { showAllAccomplishments, createANewAccomplishment, updateAccomplishment, deleteAccomplishment, showOneAccomplishment }