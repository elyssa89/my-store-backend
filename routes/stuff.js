const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff')
router.post('/' ,stuffController.createThing );
router.get('/',stuffController.findThings );
router.get('/:id', stuffController.findById);
router.put('/:id', stuffController.modifyThing)
router.delete('/:id',stuffController.deleteThings );

module.exports  = router
  
 