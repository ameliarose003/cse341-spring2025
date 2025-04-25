const express = require('express');
const router = express.Router();
const nameController = require('../controllers/nameControllers');
router.get('/', nameController.showName);
module.exports = router;