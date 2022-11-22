const { request } = require('express')
const User=require('../Models/user')
const {validationResult, Result}=require('express-validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


// exports.getLogin=(req,res,next)=>{
    
// }
exports.getSignup=(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    const error =new Error('Validation failed.');
    error.statusCode=422;
    error.data=errors.array();
    throw error;
}
const name=request.body.name;
const email=request.body.email;
const password=request.body.password;

bcrypt
.hash(password,12)
.then(hashedPw=>{
    const user=new User({
        email:email,
        password:hashedPw,
        name:name
    });
    return user.save();
})
.then(result=>{
    res.status(201).json({message:'User created !',userId: result._id })
})

.catch(err=>{
    if(!err.statusCode){
        err.statusCode=500;
    }
    next(err);
})
}

// exports.getPasswordreset=(req,res,next)=>{




// }

exports.postLogin=(req,res,next)=>{

const email=req.body.email;
const password=req.body.password;
let lodedUser;

User.findOne({email:email})
    .then(user=>{
        if(!user){
            const error=new Error('A user with this email could not be found.')
            error.statusCode=401;
            throw error;
        }
        lodedUser=user
        return bcrypt.compare(password,user.password)
    })
    .then(isEqual=>{
        if(!isEqual){
const error =new Error('Wrong password!');
error.statusCode=401;
throw error;
        }

        const token= jwt.sign({
            email:lodedUser.email,
            userId:lodedUser._id.toString()
        },
        'somesupersecretsecret',
         {   expiresIn:'1h'}

    );

res.status(200).json({token:token,userId:lodedUser._id.toString()});
 })
    .catch(err=>{
        if(!err.statusCode){
            err.statusCode=500;
        
        }
        next(err)
    })


 }

// exports.postSignup=(req,res,next)=>{



// }
// exports.postLogout=(req,res,next)=>{




// }

// exports.getReset=(req,res,next)=>{



// }

// exports.postReset=(req,res,next)=>{



// }

// exports.getNewPasssword=(req,res,next)=>{




// }

// exports.postNewPassword=(req,res,next)=>{



// }
