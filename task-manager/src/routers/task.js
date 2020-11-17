const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save()
        res.status(201).send(task)
    } catch(err) {
        res.status(400).send(err)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch(err) {
        res.status(500).send(err)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['task', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    const _id = req.params.id;

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findById(_id);

        updates.forEach((update) => task[update] = req.body[update])
        await task.save();

        // const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });


        if(!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch(err) {
        res.status(400).send(err)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task) {
            res.status(404).send();
        }

        res.send(task);
    } catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;
