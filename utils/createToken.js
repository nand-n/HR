/**
 * Create Json Web Token and hash the token with the given payload 
 */

const  jwt = require('jsonwebtoken')
const configs  = require('./configs');

//Generate a jwt token 
const createToken= (payload)=>{
    const payloadValue = {id:payload.id};
    const token = jwt.sign(payloadValue , configs.jwt.secret , {
        expiresIn:configs.jwt.expiresIn,
    })
    //Return the token 
    return token
}

module.exports = createToken