
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');

const User = require("./models/Users");

app.post("/", async(req, res) =>{

    let user = new User(req.body);

    let result = await user.save();

    res.send(result);

});

app.listen(port, ()=>{

    console.log(`Server is running on the http://localhost/${port}`);

});