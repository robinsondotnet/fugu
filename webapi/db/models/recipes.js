module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Recipes',
        {
            recipeId: {
                type: DataTypes.UUIDV4,
                onDelete: 'cascade'
            },
            name: {
                type: DataTypes.STRING,
                defaultValue: ''
            }
        }
    );
};