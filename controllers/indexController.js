const getIndexPage = (req, res) => {
  res.render("index")
} 
const getLoginPage = (req, res) => {
  res.render("login")
}

const getSignupPage = (req, res) => {
  res.render("signup")
}

const postLogin = (req, res) => {
 
}
const postSignup = (req, res) => {
 
}

module.exports = {getIndexPage, getLoginPage, getSignupPage, postLogin, postSignup}
