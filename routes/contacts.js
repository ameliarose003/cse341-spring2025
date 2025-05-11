const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");
const database = require('../database/connect');
const {ObjectId} = require('mongodb');

// GET routes
router.get("/", contactsController.getAllContacts);
router.get("/contacts/:id", contactsController.getContactById);

// Now I create a POST (new contact)
router.post('/', async (req, res) => {
    const contact = {
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.favoriteColor || !contact.birthday) {
        return res.status(400).json({message: 'All fields are required.'});
    }
    
    try {
        const result = await database.getDb().collection('contacts').insertOne(contact);
        res.status(201).json({id: result.insertedId});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
});

// Now I create a PUT (update contact)
router.put('/:id', async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    try {
        const result = await database.getDb().collection('contacts').replaceOne({_id: contactId}, updatedContact);

        if (result.modifiedCount === 0) {
            return res.status(404).json({message: 'Contact not found.'});
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Now I create a DELETE (delete contact)
router.delete('/:id', async (req, res) => {
    const contactId = new ObjectId(req.params.id);

    try {
        const result = await database.getDb().collection('contacts').deleteOne({_id: contactId});

        if (result.deletedCount === 0) {
            return res.status(404).json({message: 'Contact not found.'});
        }

        res.status(200).json({message: 'Contact deleted successfully.'});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});




module.exports = router;