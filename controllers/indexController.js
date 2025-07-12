const db = require("../db/query")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")

const getIndexPage = async (req, res) => {
  const allPosts = await db.getAllPosts();
  res.render("index", {name: req.user, allPosts: allPosts})
} 
const getLoginPage = (req, res) => {
  res.render("login", {name: req.user})
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
  res.render("signup", {name: req.user})
}

const postSignup = async (req, res, next) => {
  try {
    const {fullname, username, password} = req.body
    const errors = validationResult(req) 
    console.log(errors)
    if (!errors.isEmpty()) {
       return res.status(400).render("signup",{
         errors: errors.array()
       })
    }
   
    const hashedPassword = await bcrypt.hash(password, 10)
     await db.createUser(fullname, username, hashedPassword)
     
     res.redirect("login")
  } catch(error) {
    //dublicate key error i added UNIQUIE constraint for username in db
    // if u tryed to add existing username
    //  it will say unique constraint was violated and the error code is 23505,

    if (error.code === "23505") {
      return res.status(400).render("signup", {
      errors: [{ msg: "Username already exists", path: "username" }]
      })
    }
    next(error)
  }

}

const getPostPage = (req, res, next) => {
  res.render("new-post", {name: req.user})
}

const createPost = (req, res, next) => {
  const {title, content} = req.body
  const {id} = req.user
  db.createPost(title, content, id)

  res.redirect("/")
  
}


module.exports = {getIndexPage, getLoginPage, logout, getSignupPage, postSignup, getPostPage, createPost}
