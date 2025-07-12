const pool = require("./pool")


const getAllUserName = async () => {
  const {rows} = await pool.query("SELECT * FROM posts;")
}

const getAllPosts = async () => {
  const {rows} = await pool.query(`
    SELECT username, fullname, title, content, time FROM users 
    INNER JOIN posts ON users.id = posts.userid ORDER BY TIME DESC;`)
  return rows;
}

const createUser = async (fullname, username,  password ) => {
  await pool.query("INSERT INTO users(fullname, username, password) VALUES ($1, $2, $3);", [fullname, username, password])
}

const createPost = async (title, content, userid) => {
  await pool.query("INSERT INTO posts(title, content, userid) VALUES ($1, $2, $3);",
    [title, content, userid]
  )
}

module.exports = { getAllPosts, createUser, createPost }