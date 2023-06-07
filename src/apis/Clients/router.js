/**
 * A router ti set up all the routes 
 */

const router =require ('express').Router();
const authorized = require('../../auth/authorization');
const clientController = require('./controller')

router.route("/signup").post(clientController.signUp)
router.route("/signin").post(clientController.signIn)

router.route("/:id")
                .get(authorized , clientController.findById)
