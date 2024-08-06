const newsletterData = require("../model/newsletterModel");

const addNewsletterData = async (req, res) => {
    try {   
        const create = new newsletterData({
            newsletterMail: req.body.newsletterMail,
        });
        const response = await create.save();
        res.status(201).send(response);
    } catch (error) {
        res.status(401).send(error.message);
    }
}

const getNewsletterData = async (req, res) => {
    try {   
        const findData = await newsletterData.find();
        res.status(200).send(findData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteNewsletterData = async (req, res) => {
    try {   
        const _id = req.params.id;
        const deleteNewsletter = await newsletterData.findByIdAndDelete(_id);
        console.log("deleteContact:-", deleteNewsletter)
        res.status(200).send(deleteNewsletter);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {addNewsletterData, getNewsletterData, deleteNewsletterData};