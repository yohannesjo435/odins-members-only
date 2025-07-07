const {Router} = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")
const {signUpValidation} = require("../middlewares/validations") 

indexRouter.get("/", indexController.getIndexPage)
indexRouter.get("/login", indexController.getLoginPage)
indexRouter.get("/signup", signUpValidation, indexController.getSignupPage)


indexRouter.post("/signup", indexController.postSignup)
indexRouter.post("/login", indexController.postLogin)

module.exports = indexRouter