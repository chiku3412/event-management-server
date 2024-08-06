const eventList = require("../model/eventModel");
const multer = require('multer');

const getEvent = async (req, res) => {
    try {
        const findData = await eventList.find();
        res.status(200).send(findData);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getEventById = async (req, res) => {
    try {
        const findData = await eventList.findById(req.params.id);
        res.status(200).send(findData);
    } catch (error) {
        res.status(400).send(error);
    }
}


const addEvent = async (req, res) => {
    try {
        const { eventName, eventLocation, eventImage, bannerImage, eventType, eventDescription, eventItem, clientName, clientReview } = req.body;

        const create =  new eventList({
            eventName,
            eventLocation,
            eventType,
            eventDescription,
            eventItem,
            clientName,
            clientReview
        });
        if (req.files && req.files.eventImage) {
            create.eventImage = req.files.eventImage[0].path.replace(/\\/g, '/').replace(/^.*[\\\/]/, '');
        }
        
        if (req.files && req.files.bannerImage) {
            create.bannerImage = req.files.bannerImage[0].path.replace(/\\/g, '/').replace(/^.*[\\\/]/, '');
        }

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
        res.status(200).send(deleteEvents);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { getEvent, addEvent, deleteEventList, getEventById };    