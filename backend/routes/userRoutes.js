const express = require('express');

const Router = express.Router();


Router.route("/").get((req, res) => {
res.status(200).json({message:"users details will have been sent shortly"})
});

Router.route("/:id").get((req, res) => {
res.status(200).json({message:`user with ID:${req.params.id} details will have been sent shortly  `})
});

Router.route("/").post((req, res) => {
res.status(200).json({message:`user with ID:${req.params.id} details will have been sent shortly  `})
});

Router.route("/:id").patch((req, res) => {
    res.status(200).json({message:`user with ID:${req.params.id} details will have been updated shortly  `})
    });

Router.route("/:id").delete((req, res) => {
res.status(200).json({message:`user with ID:${req.params.id} details will have been deleted shortly  `})
});
    

module.exports = Router