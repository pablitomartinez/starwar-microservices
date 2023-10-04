const {Router} = require('express');
const controllers = require('../controllers');
const middlewawres = require('../middlewares')

const router = Router();

router.get('/', controllers.getFilms);
router.post('/', middlewawres.filmsValidation, controllers.createFilms);

module.exports = router;
