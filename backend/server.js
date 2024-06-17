const express = require('express');
const dotenv = require('dotenv').config()
const userRoutes = require("../backend/routes/userRoutes")

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes );

const PORT =process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log("server running on the port: ", PORT);
})
