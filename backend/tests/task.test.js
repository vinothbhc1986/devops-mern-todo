const request = require('supertest');
const {app, server} = require('../index');
const mongoose = require('mongoose');
describe('Task API',  () => {
    it('should get all tasks', async () => {
      const response = await request(app).get('/api/tasks')
      expect(response.statusCode).toBe(200);
    })
})

afterAll(async () => {
    await mongoose.connection.close();
   await server.close();
})