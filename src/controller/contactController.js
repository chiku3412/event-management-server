const contactData = require("../model/contactModel");

const getContact = async (req, res) => {
    try {
        const findData = await contactData.find();
        res.status(200).send(findData);
    } catch (error) {
        res.status(400).send(error);
    }
}

const addContact = async (req, res) => {
    try {
        const create = new contactData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            eventName: req.body.eventName,
            destination: req.body.destination
        });
        const response = await create.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

const deleteContactData = async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteContact = await contactData.findByIdAndDelete(_id);
        console.log("deleteContact:-", deleteContact)
        res.status(200).send(deleteContact);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { getContact, addContact, deleteContactData };    