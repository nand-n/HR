/**
 * Comapre Incoming password with hashed password 
 */
const bcrypt =require( 'bcryptjs')

 const comparePassword=(incomingPassword, hashedPassword )=>{
    return bcrypt.compareSync(incomingPassword.toString() , hashedPassword)

}

module.exports = comparePassword