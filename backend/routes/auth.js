const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { validationResult, checkSchema, matchedData, body } = require('express-validator');
const UservalidationSchema = require("../Validator/ValidationSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middlewares/fetchUser');
const JWT_SECRET = "I'mAmanSingh@02";


router.get('/', (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    res.send("hello").status(200);
});

//Create new User..
router.post('/createUser', checkSchema(UservalidationSchema)
    , async (req, res) => {
        //To check the errors, if errors return bad req.
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        // const user = User(req.body);
        // user.save();
        // res.status(200).send(req.body);

        //Another way:
        try {
            //check whether the user with this email exists already..
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists." });
            }

            //Hashing password..
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            //Creating new user..
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });

            const data = {
                user: {
                    id: user.id,
                }
            };

            const authToken = jwt.sign(data, JWT_SECRET);

            res.status(200).send(authToken);
        }
        //catch errors..
        catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server Error occured.")
        }
});



//Authenticate a User.(Login)
router.post('/login', [
    body('email').isString().notEmpty().isEmail().withMessage({msg: "Enter a valid email."}),
    body('email').notEmpty().withMessage({msg: "Password should not be blank."}),
], async (req, res)=>{
    //To check the errors, if errors return bad req.
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({errors: result.array()});
    };
    
    const{email, password}= req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please login with correct credentials."});
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({error: "Please login with correct credentials."});
        };
        const data = {
            user: {
                id: user.id,
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.send(authToken);

    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured.");
    }

});


//Get loggedin.. Fetch User details...Login required..
router.post('/getUser', fetchUser, async(req, res)=>{
    try {
       const userId = req.user.id;
       const user = await User.findById(userId).select("-password"); 
       res.send(user);
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server occured.");
    }
});


module.exports = router; 