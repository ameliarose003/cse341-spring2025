const Contact = require("../models/contact.js");
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getContactById = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      res.json(contact);
    } catch (err) {
      res.status(500).json({ message: "Contact with specified id doesnt exist" });
    }
  };
// exports.getAllContacts = async (req, res) => {
//     const contact  = await contact.findById(req.params.id);
//     res.json(contact);
// };
module.exports = {
  getAllContacts: getAllContacts,
  getContactById: getContactById,
};