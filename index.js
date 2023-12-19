const express = require("express");
const axios = require("axios");

const app = express();
const url = 'https://jsonplaceholder.typicode.com/users';
const port = 5000;

app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get(url); 
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post("/user", async (req, res) => {
    try {
        const { data } = await axios.get(url); 
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});
