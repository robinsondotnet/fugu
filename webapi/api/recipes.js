const { Router } = require('express');
const { Recipes } = require('../db/models');

const router = Router();

router.get('/', (req, res, next) => {

    return Recipes.findAll()
        .then(recipes => recipes.map(recipe => recipe.get()))
        .then(recipes => res.json(recipes))
        .catch(err => next({ message: err.message}));
});

module.exports = router;