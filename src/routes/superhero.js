const { Router } = require('express');

const router = Router();

const { routsToken, verifyToken } = require('../controllers/token.controller')
const { createDefault, getAll } = require('../controllers/superhero.controller')

router.post('/api/superheros/createDefault', createDefault)
router.post('/api/superheros/getAll', getAll)

module.exports = router;