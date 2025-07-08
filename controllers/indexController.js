const db = require("../db/query")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")


const getIndexPage = (req, res) => {
  res.render("index", {name: req.user})
} 
const getLoginPage = (req, res) => {
  res.render("login")
}
const logout = (req, res, next) => {
  req.logout((err)=> {
    if (err) {
      return next(err)
    }
    res.redirect("/")
  })
}

const getSignupPage = (req, res) => {
  res.render("signup")
}

const postSignup = async (req, res, next) => {
  try {
    const {fullname, username, password} = req.body
    const errors = validationResult(req) 
   
    if (!errors.isEmpty()) {
       return res.status(400).render("index", {
         errors: errors.array()
       })
    }
   
    const hashedPassword = await bcrypt.hash(password, 10)
     await db.createUser(fullname, username, hashedPassword)
     res.redirect("/")
  } catch(error) {
    //dublicate key error
    if (error.code === "23505") {
      return res.status(400).render("index", {
      errors: [{ msg: "Username already exists", param: "username" }]
      })
    }
    next(error)
  }

}


module.exports = {getIndexPage, getLoginPage, logout, getSignupPage, postSignup}
