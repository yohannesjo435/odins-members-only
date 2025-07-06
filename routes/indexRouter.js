const {Router} = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")

indexRouter.get("/", indexController.getIndexPage)
indexRouter.get("/login", indexController.getLoginPage)
indexRouter.get("/signup", indexController.getSignupPage)


indexRouter.post("/login", indexController.postLogin)
indexRouter.post("/signup", indexController.postSignup)

module.exports = indexRouter