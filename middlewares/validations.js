const {body} = require("express-validator")

const signUpValidation = [
    body("fullname")
      .trim()
      .notEmpty().withMessage("Name must not be empty"),
    body("username")
      .trim().notEmpty()
      .isLength({min: 2, max: 20}).withMessage("your username length should be between 2 and 20"),
    body("password")
      .trim().notEmpty()
      .isLength({min: 6, max: 60}).withMessage("your password length should be minmum 6 and maximum 60"),
    body("confirm_password")
      .trim().notEmpty()
      .custom((value, {req})=> {
        if(value !== req.body.password){
          throw new Error("the password don't match")
        }
        return true;
      }).withMessage("Password Don't match")
]

const postValidation = [
  body("title").notEmpty().withMessage("Title can not be empty")
  .isLength({min: 2, max: 200}).withMessage("Title can not exceed 200 can characters and should atleast be 5 letters"),
  
  body("content").notEmpty().withMessage("type message this can not be empty")
  .isLength({min: 2, max: 1000}).withMessage("your message can not exceed 1000 characters")
]

module.exports = {signUpValidation, postValidation}