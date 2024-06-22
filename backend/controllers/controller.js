const bcrypt = require('bcrypt');
const jwt = require('json-web-token');
const db = require('../config/dbConnection')

//@desc get all users details
//route GET api/users/ 
//access public
const getUsers = (req, res) => {
    res.status(200).json({message:"users details will have been sent shortly"})
    };

//@desc get single user details
//route GET api/users/:id 
//access public
const getUser = (req, res) => {
    res.status(200).json({message:`user with ID:${req.params.id} details will have been sent shortly  `})
    };

//@desc create a new user 
//route POST api/users/ 
//access public
const createUser = async (req, res) => {
    const { username, password, email, company } = req.body;

        if(!username){
            return res.status(400).json({message:'username is required'});
        };
        if(!password){
            return res.status(400).json({message:'password is required'});
        };
        if(!email){
            return res.status(400).json({message:'email is required'});
        };

    try{
        const hashedpassword = await bcrypt.hash(password,10);
    const values = [
        username,
        hashedpassword,
        email,
        company
    ]
    const sql = `INSERT INTO users (username, password, email, company) VALUES (?, ?, ?, ?)`;

    db.query(sql,values,(err,result) =>{
        if(err) return res.status(500).json({message:`Internal server error`})
            console.log(result);
    })      
    
    res.status(200).json({message:`user registered sucessfully`})

    }
    catch(err){
      res.status(500).json({message:'Internal server error'})  
    }
        };

//@desc update a new user 
//route PATCH api/users/:id 
//access public
const updateUser = (req, res) => {
    res.status(200).json({message:`user with ID:${req.params.id} details will have been updated shortly  `})
    };

//@desc delete a new user 
//route DELETE api/users/:id 
//access public
const deleteUser = (req, res) => {
    res.status(200).json({message:`user with ID:${req.params.id} details will have been deleted shortly  `})
    };


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }