// db config
const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'docker' ,
  port: 5432,
  database: 'contagem',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
}

module.exports = config