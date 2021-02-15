import express from 'express';
const controller = require('../controller/index')
const router = express.Router();

router.get("/", controller.userController.root);
router.get("/getData", controller.userController.getData);

module.exports = router;