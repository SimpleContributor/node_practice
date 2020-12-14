const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');
const { response } = require('express');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: "Mike",
    email: "mike@example.com",
    password: "56what!!",
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany();
    await new User(userOne).save();
});

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Caleb',
        email: 'caleb@example.com',
        password: 'MyPass777!'
    }).expect(201);

    // assert that the db was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Caleb',
            email: 'caleb@example.com'
        },
        token: user.tokens[0].token
    })

    expect(user.password).not.toBe('MyPass777!')
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(response.body).toMatchObject({
        token: user.tokens[1].token
    })
})

test('Should NOT login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'theWrongPass'
    }).expect(400)
})

test('Should fetch user profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`) //Set the authorization header to equal the generated token
        .send()
        .expect(200)
})

test('Should NOT fetch profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete authenticated user account', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should NOT delete unauthenticated user account', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Pike'
        })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Pike')
})

test('Should NOT update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Noneya'
        })
        .expect(400)
})
