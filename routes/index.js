var express = require('express');
var router = express.Router();

// controller
var show_controller = require('../controllers/testController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({message: "Check it out"});
// });
//
// module.exports = router;

router.get('/shows', show_controller.index);

router.get('/testform', show_controller.show_test);

//router.post('/testform', show_controller.show_create);

router.post('/createShow', show_controller.show_create);

module.exports = router;
