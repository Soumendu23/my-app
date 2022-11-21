const express= require('express');
// const expres =require('express');
 const authControllers=require('../controllers/auth')
const User=require('../Models/user')
const {body} =require('express-validator')
const router = express.Router();



// router.get('/Signup',authControllers.getSignup);
router.put('/Signup',[
    //Adding email validation
    body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    //Checking if email is alredy exists
    .custom((value,{req})=>{
        return User.findOne({email:value}).then(userDoc=>{
            if(userDoc){
                return Promise.reject('Email address alredy exiists.')
            }
            
        })
    })

    .normalizeEmail(),
    body('password')
    .trim()
    .isLength({min:5}),
    body('name')
    .trim()
    .not()
    .isEmpty()
],authControllers.getSignup);


module.exports=router;