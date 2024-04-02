exports.paginaInicial = (req, res) => {
  // req.session.usuario = { nome: "Luiz", logado: true };
  // console.log(req.session.usuario);
  // console.log(req.flash("info"), req.flash("error"), req.flash("success"));
  // req.flash("info", "Ola mundo!"); //Exibe apenas uma vez, na prox atualizacao de pag n mostra mais
  // req.flash("error", "dasd");
  // req.flash("success", "dasdas");
  res.render("index", {
    titulo: ` Este é o <span style="color: red;">titulo da pagina`,
    numero: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
};

exports.trataPost = (req, res) => {
  res.send("Sou sua nova rota de post");
};
