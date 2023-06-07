/**
 * Ckeck if authorization token exists in the header and return it 
 * 
 */
const AppError = requrie("../../utils/appError");

const authToken = ( req , next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.split(" ")[0]==="Bearer" ){
        token = req.headers.authorization.split(" ")[1];
        if(!token) return next(new AppError("Please Login" , 401))
        return token;
    }else{
        return next(new AppError("Please Login" , 401))
    }
}

//Export 
module.exports = authToken