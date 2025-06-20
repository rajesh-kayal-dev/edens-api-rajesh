// routes/userActionRoutes.js
const express = require('express');
const router = express.Router();
const userActionController = require('../controllers/userActionController');

router.post('/', userActionController.addUserAction);
router.get('/', userActionController.getUserActions);
router.delete('/', userActionController.removeUserAction);

//get user cart data
router.get('/cart', userActionController.getCart);

module.exports = router;