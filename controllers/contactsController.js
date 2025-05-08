const Contact = require('../models/contact');

exports.getAllContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
  };


exports.getContactById = async (req, res) => {
const contact = await Contact.findById(req.params.id);
res.json(contact);
};
// exports.getAllContacts = async (req, res) => {
//     const contact  = await contact.findById(req.params.id);
//     res.json(contact);
// };