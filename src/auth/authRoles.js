/**
 * To Protect based on the role 
 * 
 */
const AppError = require("../../utils/appError")

const authRoles = (...roles) =>{
    return (req, res , next ) =>{
        if(!roles.includes(req.user.role)){
            return next(new AppError("Access Denied" , 403))
        }
        next()
    }
}

//Export 
module.exports = authRoles