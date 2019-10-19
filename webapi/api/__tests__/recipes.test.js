const request = require('supertest');
const app = require('../../app');
const uuidv4 = require('uuid/v4');
const db = require('../../db/models');

beforeAll(async() => {

    await db.sequelize.drop();
    await db.sequelize.sync({ force: true });
});

describe('Recipe route', () => {
    test('It should return all recipes', async () => {

        // Arrange
        const recipe = { recipeId: uuidv4(), name: 'Lomo saltado'};
        await db.Recipes.create(recipe);

        // Act
        const response = await request(app).get("/api/recipes");

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    test('It should thrown error with proper message', async () => {

        // Arrange
        errorMessage = 'foo';
        db.Recipes.findAll = jest.fn().mockImplementation(() => {
            throw Error(errorMessage);
        });

        // Act
        const response = await request(app).get("/api/recipes");

        // Assert
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe(errorMessage);
    })
});