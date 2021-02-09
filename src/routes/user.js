const { Router } = require('express');

const router = Router();

const { routsToken, verifyToken } = require('../controllers/token.controller')
const { createUser, login } = require('../controllers/user.controller')

router.post('/api/users/createUser', createUser)
router.post('/api/users/login', login)

module.exports = router;