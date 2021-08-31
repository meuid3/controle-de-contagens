const { Router } = require("express");
const AutenticacaoController = require('../controller/autenticacaoController')

const autenticacaoRouter = Router()

autenticacaoRouter.post('/', AutenticacaoController.login)

module.exports = {autenticacaoRouter}