const {Router} = require("express")
const indexRouter = Router()
const indexController = require("../controllers/indexController")
const {signUpValidation, postValidation} = require("../middlewares/validations")
const passport = require("passport")
const {auth} = require("../middlewares/auth")

indexRouter.get("/", indexController.getIndexPage)
indexRouter.get("/login", indexController.getLoginPage)
indexRouter.get("/loginout", indexController.logout)
indexRouter.get("/signup", indexController.getSignupPage)
indexRouter.get("/post", auth, indexController.getPostPage)


indexRouter.post("/signup", signUpValidation, indexController.postSignup)
indexRouter.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}))
indexRouter.post("/post", postValidation, indexController.createPost)

module.exports = indexRouter