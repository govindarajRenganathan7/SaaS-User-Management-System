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
const createUser = (req, res) => {
    res.status(200).json({message:`user with ID:${req.params.id} details will have been created shortly  `})
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