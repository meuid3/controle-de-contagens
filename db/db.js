const { Pool } = require('pg')
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

class DB {
  constructor() {
    this.connection =  new Pool({
      host: host,
      user: user,
      password: password ,
      port: port,
      database: database,
      max: max,
      idleTimeoutMillis: idleTimeoutMillis,
      connectionTimeoutMillis: connectionTimeoutMillis,
    })
  }

  async getConnection() {
    return await this.connection.connect()
  }
}

module.exports = {DB}