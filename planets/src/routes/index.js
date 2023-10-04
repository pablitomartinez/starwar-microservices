const {Router} = require('express');
const controllers = require('../controllers');
const middleware = require('../middlewares')
const router = Router();

router.get('/', controllers.getPlanets);

//antes de llegar al controlador
router.post('/', middleware.planetValidation, controllers.createPlanets);

module.exports = router;
