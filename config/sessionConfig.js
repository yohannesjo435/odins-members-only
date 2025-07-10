const session = require("express-session")
const pgSession = require("connect-pg-simple")(session)
const pool = require("../db/pool")

const sessionConfig = session({
  store: new pgSession({
    pool: pool,
    tableName: "users_sessions",
    createTableIfMissing: true
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, //don't create session untill something is stored in it
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24 * 30
  }
})

module.exports = sessionConfig

/* 
resave:
  //prevent session to not be resave if nothing chage during each req
  //Don’t save the session on every request automatically id there is no change.
saveUnintilized
  // true bhon session wil be creted empty bhon false bhon the session will be created when sessionis needed or value snorw;

*/