const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const { 
    userOneId, 
    userOne, 
    userTwo, 
    setupDatabase, 
    taskOne, 
    taskTwo, 
    taskThree 
} = require('./fixtures/db')

beforeEach(setupDatabase);

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            task: 'From my tests'
        })
        .expect(201);

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull();
    expect(task.status).toEqual(false)
});

test('Should get userOne tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should NOT delete different users tasks', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
})
