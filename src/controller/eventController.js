const eventList = require("../model/eventModel");

const getEvent = async (req, res) => {
    try {
        const findData = await eventList.find();
        res.status(200).send(findData);
    } catch (error) {
        res.status(400).send(error);
    }
}

const addEvent = async (req, res) => {
    try {
        const create = new eventList({
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            eventImage: req.body.eventImage,
            eventDescription: req.body.eventDescription
        });
        const response = await create.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

const deleteEventList = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteEvents = await eventList.findByIdAndDelete(_id);
        console.log("deleteEvents:-", deleteEvents)
        res.status(200).send(deleteEvents);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { getEvent, addEvent, deleteEventList };    