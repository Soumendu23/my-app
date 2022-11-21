const { request } = require('express')
const User=require('../Models/user')
const {validationReasult}=require('express-validator/check')


// exports.getLogin=(req,res,next)=>{
    
// }
exports.getSignup=(req,res,next)=>{
const errors=validationReasult(req);
if(!errors.isEmpty()){
    const error =new Error('Validation failed.');
    error.statusCode=422;
    error.data=errors.array();
    throw error;
}
const name=request.body.name;
const email=request.body.email;
const password=request.body.password;


}

// exports.getPasswordreset=(req,res,next)=>{




// }

// exports.postLogin=(req,res,next)=>{



// }

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
