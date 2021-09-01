const corsAccess = (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  next()
}

module.exports = {corsAccess}