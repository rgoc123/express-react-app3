var express = require('express');
var router = express.Router();

// controller
var show_controller = require('../controllers/testController');

router.get('/shows', show_controller.index);

router.get('/testform', show_controller.show_test);

router.post('/createShow', show_controller.show_create);

router.get('/shows/:id', show_controller.show_get);

router.delete('/shows/:id', show_controller.show_delete);

router.put('/shows/:id', show_controller.show_edit);

module.exports = router;
