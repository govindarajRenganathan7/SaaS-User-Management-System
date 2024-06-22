const   express = require('express'),
        dotenv = require('dotenv').config(),
        userRoutes = require("../backend/routes/userRoutes"),
        errorHandler = require('./middlewares/errorHandler'),
        cors = require('cors'),
        db = require('./config/dbConnection'),
        app = express();

        app.use(cors());
        app.use(express.json());
        db;

        app.use("/api/users", userRoutes );

        app.use(errorHandler);

        const PORT = process.env.PORT || 5001;

        app.listen(PORT, ()=>{
            console.log("server running on the port: ", PORT);
        })
