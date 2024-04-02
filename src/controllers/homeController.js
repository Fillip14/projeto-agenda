const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
  const contato = new Contato();
  const contatos = await contato.buscaContatos();
  res.render('index', { contatos });
};
