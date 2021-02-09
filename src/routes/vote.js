const { Router } = require('express');

const router = Router();

const { routsToken } = require('../controllers/token.controller')
const { addLike, addDislike } = require('../controllers/vote.controller')

router.post('/api/votes/addLike', routsToken, addLike)
router.post('/api/votes/addDislike', routsToken, addDislike)

module.exports = router;