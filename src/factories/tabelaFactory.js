const TabelaService = require('./../services/tabelaService')
const TabelaRepository = require('./../repositories/tabelaRepository')

const generateTabelaInstance = (data) => {
  const tabelaRepository = new TabelaRepository(data)
  const tabelaService = new TabelaService(tabelaRepository)
  return tabelaService;
}

module.exports = {generateTabelaInstance}