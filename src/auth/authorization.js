/**
 * Verify the jwt Token from the request heaader 
 * It is used to restrict access to some resources 
 * @params {*} req
 * @params {*} res
 * @params {*} next
 * @returns 
 */


const configs = require("../../utils/configs")
const AppError = require("../../utils/appError")
const jwt = require("jsonwebtoken")
const ClientDAL = require("../apis/Clients/dal")
const authToken = require("./authToken")

const authorized = async ( req , res , next ) =>{
    try {
        //Get Authorization token 
        const token  = authToken(req , next )

        //Verify the token 
        const verifiedToken  = jwt.verify(token , configs.jwt.secret)

        //Find user by id from the verified token 
        const user = await ClientDAL.findById(verifiedToken.id)
        if(!user) return next(new AppError("Access Forbidden" ,403))
        req.user = user
        next()

    } catch (error) {
        next(error)
    }
}

//Export 
module.exports = authorized