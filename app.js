const express = require("express")
const app = express()
const PORT = process.env.PORT || 3002
const indexRouter = require("./routes/indexRouter")
const path = require("node:path")
const sessionConfig = require("./config/sessionConfig")
const passport = require("passport")
const passportConfig = require("./config/passportconfig")

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))


app.use(sessionConfig)
app.use(passport.session())
app.use("/", indexRouter)

app.listen(PORT, ()=> {
  console.log(`The server is running on port ${PORT}`)
})