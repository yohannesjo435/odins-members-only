const db = require("../db/query")


const getIndexPage = (req, res) => {
  res.render("index")
} 
const getLoginPage = (req, res) => {
  res.render("login")
}

const getSignupPage = (req, res) => {
  res.render("signup")
}

const postSignup = (req, res, next) => {
 const {fullname, username, password, confirm_password} = req.body
 console.log(fullname, username, password, confirm_password)
 res.redirect("/")

}
const postLogin = (req, res) => {
 
}

module.exports = {getIndexPage, getLoginPage, getSignupPage, postLogin, postSignup}
