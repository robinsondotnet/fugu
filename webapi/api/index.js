const { Router } = require('express');
const recipes = require('./recipes');

const router = Router();

router.use('/recipes', recipes);

module.exports = router;
