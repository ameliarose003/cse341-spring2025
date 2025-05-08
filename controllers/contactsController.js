const contact = require('../models/contact');

exports.getAllContacts = async (req, res) => {
    const contact  = await contact.findById(req.params.id);
    res.json(contact);
};