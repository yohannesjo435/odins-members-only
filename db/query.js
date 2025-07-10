const pool = require("./pool")


const getAllUserName = async () => {
  await pool.query("SELECT * FROM users;")
}

const getAllPosts = async () => {
  await pool.query("SELECT * FORM posts;")
}

const createUser = async (fullname, username,  password ) => {
  await pool.query("INSERT INTO users(fullname, username, password) VALUES ($1, $2, $3);", [fullname, username, password])
}

const createPost = async (title, content, userid) => {
  await pool.query("INSERT INTO posts(title, content, userid) VALUES ($1, $2, $3);",
    [title, content, userid]
  )
}

module.exports = {getAllUserName, getAllPosts, createUser, createPost }