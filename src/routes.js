const {Router} = require('express')

const routes = Router()

routes.get('/test', (request, response) => {
  response.status(200).json({message: "OK"})
})

module.exports = {routes};