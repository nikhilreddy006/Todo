const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Validation: zod
app.get('/todo', async function (req, res) {
    const todos = await Todo.find({});
    res.json({
        todos
    });
    console.log("Working");
});

app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Your input is wrong"
        });
        return;
    }
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo Created"
    });
});

app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Your input is wrong"
        });
        return;
    }
    await Todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});