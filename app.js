const server        = require("gbackend");
// const middlewares   = server.middlewares;
server.set({
  "cache"       : 0,
  "indexPage"   : "mainPage",
});

// default middleware setup => useless
// server.useMiddlewares([
//   middlewares.completeRequest,    //add some information
//   middlewares.sendReadyMade,      //return a generated page if it exists
//   middlewares.filterExtension,    //return a 404 error if extension is image or css
//   middlewares.render              //build page and send it to client
// ]);

server.listen(3000);
// deux routes existent pour le moment : http://localhost:3000/ (une page dynamique) et http://localhost:3000/ref (une page statique)

//TODO : ajouter le système d'enregistrement des fichiers statitiques
//TODO : tester le sysème de suppression des fichiers statiques
//TODO : vérifier le gestionnaire d'erreur
//TODO : ajouter un new lors du rendu html