/**
 * A file to start the express server
 */

const http = require( 'http')
const app = require( './app')
const configs = require( '../utils/configs')

const igniter = ()=>{
    //Create server 
    const server = http.createServer(app)
    const port = configs.port

    //Start the Server 
    server.listen(port , (e)=>{
        console.log(`Server running o on port : ${port }`)
    })
    //Listen for errors 
    server.on("error",()=>{
        if(e.code ==="EADDRINUSE"){
            console.error("Address in use , retrying....")
            setTimeout(()=>{
                server.close()
                server.listen(port , ()=>{
                    console.log(`Server runnign on port : ${port}`)
                })
            },1000)
        }
    })
}

module.exports = igniter