const express = require("express");
const router = express.Router();
const User = require('../models/User');
const { validationResult, checkSchema, matchedData } = require('express-validator');
const UservalidationSchema = require("../Validator/ValidationSchema");
const hashPassword = require('../hashed');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "I'mAmanSingh@02";


router.get('/', (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    res.send("hello").status(200);
});

router.post('/createUser', checkSchema(UservalidationSchema)
    // Validation Schema...
    /*[
        body('name').isLength({min: 5}),
        body('email').isEmail(),
        body('password').isLength({min: 7}),
    ],*/
    , async (req, res) => {
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
                user:{
                    id: user.id,
                }
            };

            const authToken = jwt.sign(data, JWT_SECRET);

            res.status(200).send(authToken);
        }
        //catch errors..
        catch (error){
            console.log(error.message);
            res.status(500).send("Some Error occured.")
        }
});

module.exports = router; 