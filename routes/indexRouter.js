const {Router} = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")
const signUpValidation = require("../middlewares/validations")
const passport = require("passport")

indexRouter.get("/", indexController.getIndexPage)
indexRouter.get("/login", indexController.getLoginPage)
indexRouter.get("/loginout", indexController.logout)
indexRouter.get("/signup", indexController.getSignupPage)


indexRouter.post("/signup", signUpValidation, indexController.postSignup)
indexRouter.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}))

module.exports = indexRouter