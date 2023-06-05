/**
 * A file to add all custom and third-party middle wares to the express stack of middle ware 
 */
 const express = require("express")
// const clientRouter =require( '../src/apis/clients/router')
const geh =require('../src/geh')
const AppError = require( "../utils/appError");
// const {companyRoute} = require( '../src/apis/companies/router')
//  const {empRouter } = require('../src/employes/router')

const app= express();

//Add middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Mount end points with rouute handles 
// app.use("/api/v1/users" , clientRouter)
// app.use("/api/v1/companies" , companyRoute)
// app.use('/api/v1/employees' , empRouter)

//Unknowen URL error Message 
app.use("*" , (req,res,next)=>{
    return next(
        new AppError(`Unknowen URL - ${req.protocol}://${req.headers.host}${req.originalUrl}` , 404)
    )
})
//Use the Global error Handler 

app.use(geh)

module.exports = app