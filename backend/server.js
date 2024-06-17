const express = require('express');
const dotenv = require('dotenv').config()

const app = express();

const PORT =process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log("server running on the port: ", PORT);
})
