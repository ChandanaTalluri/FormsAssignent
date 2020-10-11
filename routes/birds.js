var express = require('express');
var router = express.Router();
var axios = require('axios');
var birdsController = require('../controllers/birdsController');


router.get('/', birdsController.get_birds);

router.get('/create', birdsController.get_create_birds);

router.post('/create', birdsController.post_create_birds);

router.get('/success', birdsController.get_success);

  
module.exports = router;