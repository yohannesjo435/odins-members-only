const {Pool} = require("pg")
require("dotenv").config()

console.log("Connecting to DB:", process.env.DATABASE_URL)

const pool = new Pool({
  connectionString: "postgresql://members_adus_user:kMibDjmzwBO7Mlbs3b4rtENbE8rN4oXW@dpg-d1p5igqdbo4c7383eb30-a/members_adus",
  ssl: { rejectUnauthorized: false }
});
module.exports = pool