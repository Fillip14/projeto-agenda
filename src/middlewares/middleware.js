const path = require("path");

exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da var local";
  if (req.body.cliente) {
    console.log();
    console.log(`Vi que voce postou ${req.body.cliente}`);
  }
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  // if (err && err.code === "EBADCSRFTOKEN") {
  //   return res.render(
  //     path.resolve(__dirname, "..", "views", "includes", "404.ejs")
  //   );
  // }
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("404");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
