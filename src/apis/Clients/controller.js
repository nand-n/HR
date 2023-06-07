/**
 * A controller file to client 
 */
import AppError from '../../../utils/appError';
import comparePassword from '../../../utils/comparePassword';
import ClientDAL from './dal'
const createToken = require("../../../utils/createToken")

exports.signup=async (req , res , next )=>{
    try {
        const data = req.body ;
        const client = await ClientDAL.signup(data)

        //Response
        res.status(201).json({
            status:"Success",
            data:{
                client
            }
        })

    } catch (error) {
        throw error
    }
}

//Delet USer by id
exports.delete = async ( req , res , next )=>{
    try {
        const {id} = req.params
        const deleteUser= await ClientDAL.deleteUser(id)
        res.status(200).json({
            status:"Success",
            data:{
                deleteUser
            }
        })
    } catch (error) {
        throw error
    }
}

//Find all Users 
exports.findAll= async (req,res, next) =>{
    try {
        const users = await ClientDAL.findAll()
        res.status(200).json({

            status:"Success",
            data:{
                users
            }
        })
    } catch (error) {
        throw error
    }
}


exports.updateUser= async(req, res , next ) =>{
    try {
        const id = parseInt(req.params.id)
        const data = req.body

        //update user 
        const client = await ClientDAL.updateUser(id , data)

        //response 
        res.status(201).json({
            status:"Success",
            data:{
                client
            }
        })

    } catch (error) {
        throw error
    }
}

exports.findById= async ( req, res, next ) =>{
    try {
        //Find and check if user exists 
        const {id } = req.params
        const user = await ClientDAL.findById(id)
        if(!user) return next(new AppError("User Does not Exist" , 404))
        //Response 
        res.status(200).json({
            status:"Success",
            data:{user}
        })
    } catch (error) {
        throw error
    }
}

exports.signIn= async (req , res, next )=>{
    try {
        const {email , password } = req.body
        
        //Validate email and password
        if(!email , !password ){
            return  next(new AppError("Email and Password are required" ,400))
        }
        //Find the user by email 
        const user = await ClientDAL.findByEmail(email)
        if(!user || comparePassword(password , user.password)){
            return next("Invalid Credntials" , 400)
        } 

        //Generate token 
        const token = createToken({id:user.id})

        res.status(200).json({
            status:"Success",
            message:"Logged in Successfully",
            data:{user},
            token

        })

        
    } catch (error) {
        throw next(error)
    }
}