/**
 * Hash Password using bcryptjs and returns the hashed password
 */
const bcrypt = reqruie( 'bcryptjs')

const hashedPassword=(pswd) =>{
    return bcrypt.hashSync(pswd,10)
}

module.exports = hashedPassword