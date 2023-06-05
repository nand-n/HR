/**
 * Stores all Envairomental variables in one object and exports them 
 */

//Load variables in ".env" to "process.env"
require("dotenv").config()

/***
 * Stores all envairomental variables in one object and export them 
 */
 const configs ={
    port:process.env.PORT,
    env:process.env.NODE_ENV,
    db:{
        postgres:{
            userName:process.env.PG_USER_NAME,
            pswd:process.env.PG_PASSWORD,
            host:process.env.HOST,
            port:process.env.PG_PORT,
            database:process.env.PG_DATABASE,
            idleTimeOut:process.env.PG_IDLE_TIMEOUT,
            connTimeOut:process.env.PG_CONN_TIMTOUT,
            maxConn:process.env.PG_MAX_CONN,

        }
    },
    htt:{
        secret:process.env.JWT_SECRET,
        exporesIn:process.env.JWT_EXPIRESIN,
    }    
}

module.exports = configs