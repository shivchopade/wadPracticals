const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());


// MongoDB Connection

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')

.then(() => console.log('MongoDB Connected'));


// Schema

const userSchema = new mongoose.Schema({

    name: String,
    email: String

});


// Model

const User = mongoose.model('User', userSchema);



// CREATE API

app.post('/addUser', async (req, res) => {

    const user = new User(req.body);

    await user.save();

    res.send('User Added');

});



// READ API

app.get('/getUsers', async (req, res) => {

    const users = await User.find();

    res.json(users);

});



// UPDATE API

app.put('/updateUser/:id', async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send('User Updated');

});



// DELETE API

app.delete('/deleteUser/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.send('User Deleted');

});



// Server

app.listen(3000, () => {

    console.log('Server Running on Port 3000');

});