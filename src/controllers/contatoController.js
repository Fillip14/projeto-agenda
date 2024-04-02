const Contato = require('../models/contatoModel');

exports.index = (req, res) => {
  res.render('contato', {
    contato: {},
  });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato/index'));
      return;
    }
    req.flash('success', 'Contato registrado com sucesso');
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    );
  } catch (e) {
    console.log(e);
    res.render('404');
  }
};

exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render('404');
  const contato = new Contato(req.body);

  const contatoSelect = await contato.buscaPorId(req.params.id);

  if (!contatoSelect) return res.render('404');

  res.render('contato', { contato: contatoSelect });
};
