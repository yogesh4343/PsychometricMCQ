;const express = require('express');
const { Auth } = require('../Auth/Auth');
const {Signup , logIn , singleUser, logout} = require("../Controller/UserController")

const router = express.Router();

router.post("/register" ,Signup );
router.post("/login" ,logIn );
router.post("/singleUser/:id" , Auth,singleUser );
router.post("/logout" ,logout );




// module 
module.exports = router