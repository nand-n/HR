/**
 * A File contains a global error handler 
 */
const AppError  = require( "../../utils/appError");
const configs  = require( "../../utils/configs");

//Send Error for the development Envairoment 
 const errorForDev= (err , res) =>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        errorStack:err.stack
    })
}

//Send Error for Production envairoment 
 const errorForProd = (err,res) =>{
    if(err.isOperational){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        });
    }else{
        res.status(500).json({
            status:"ERROR",
            messaage:"Opps! Unknowen error happned"
        })
    }
}

/**
 * Error Handler midleware  - Global Error Handler 
 */
 const geh = (err, req , res , next ) =>{
    //if "err.statusCode" code is missed , assign it 500
    err.statusCode = err.statusCode ?err.statusCode : 500
    //if "err.status" is missing , asign it "ERROR"
    err.status= err.status ? err.status : "ERROR"
    //Unique Column constain
    if(err.messaage.indexOf("unique_email" > 1 )) 
        err = new AppError("Email is already used" , 400)
    if(configs.env ==="Development")
        //Send error for diffent envairoment
        errorForDev(err,res)
    if(configs.env ==="Production")errorForProd(err,res) 
}

module.exports = geh