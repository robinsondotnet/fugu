'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    name: DataTypes.STRING
  }, {});
  Recipes.associate = function(models) {
    // associations can be defined here
  };
  return Recipes;
};