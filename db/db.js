//const { Pool } = require('pg')
const {
  database,
  host,
  password,
  port,
  user,
  connectionTimeoutMillis, 
  idleTimeoutMillis, 
  max
} = require('./config')


const { Pool } = require('pg');

const db = new Pool({
  host: host,
  user: user,
  password: password ,
  port: port,
  database: database,
  max: max,
  idleTimeoutMillis: idleTimeoutMillis,
  connectionTimeoutMillis: connectionTimeoutMillis,
})

module.exports = db