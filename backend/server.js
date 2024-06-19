const express = require('express');
const dotenv = require('dotenv').config()
const userRoutes = require("../backend/routes/userRoutes");
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes );

app.use(errorHandler);

const PORT =process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log("server running on the port: ", PORT);
})
