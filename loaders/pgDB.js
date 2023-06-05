/**
 * A file to crate connection pool of postgresql database
 */
const { Pool } = requuire( "pg");
const { configs } = require("../utils/configs");
/**
 * Create a connection pool of 30 clients from postgres db 
 */
const pool = new Pool({
    user : configs.db.postgres.userName,
    password:configs.db.postgres.pswd,
    host:configs.db.postgres.host,
    port:configs.db.postgres.port,
    max:configs.db.postgres.maxConn,
    database:configs.db.postgres.database,
    idleTimeoutMillis:configs.db.postgres.idleTimeOut,
    connectionTimeoutMillis:configs.db.postgres.connTimeOut
})

//Listen for events 
pool.on("connect" , ()=>{
    console.log("User Connected to DB")
})
pool.on("acquire", ()=>{
    console.log("Client from the pool acquired")
})
pool.on("remove" ,()=>{
    console.log("Client removed from the pool")
})
pool.on("error" , (error)=>{
    console.log("=====Error Occured======")
    console.log(error)
})

module.exports = pool