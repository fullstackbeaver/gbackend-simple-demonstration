const { Console } = require('console');
const fs = require('fs'); // this engine requires the fs module

let configuration = {
  generatedFolder: "/generated",
  publicFolder: "/public",
  appFolder: "/app"
}


function renderer(src, data, type = "pages/") {
  try {    
    const template = getTemplate(src, type);
    this.partial = function (src, data) {
      return renderer(src, data, "partials/");
    }
    this.page = function (src, data) {
      return renderer(src, data, "pages/");
    }
    for (const [key, value] of Object.entries(data)) {
      this[key] = value;
    }
    return Function("return `" + template + "`;")();
  }
  catch (err) {
    console.error(err);
    throw(err)
  }
}

/**
 * [buildPath description]
 *
 * @param   {String}  src   [src description]
 * @param   {String}  type  [type description]
 *
 * @return  {String}        [return description]
 */
function getTemplate(src, type) {
  const possibilities  =   [
    type + src + "/" + src + ".html",
    type + src + ".html",
    type + src + "/template_" + src + ".html",
    // "/pages/mainPage/template_mainPage.html",
    // "pages/mainPage/template_mainPage.html",
  ];

  for(let i=possibilities.length-1; i >= 0; i--){
    
   possibilities[i] = process.cwd() + configuration.appFolder + "/" +possibilities[i];
   console.log("possibilities[i]:",possibilities[i]);
   
   if (fs.existsSync(possibilities[i])) return fs.readFileSync(possibilities[i], 'utf-8');
  }
  
  console.error(src,"not found");
  throw ("cannot find template");
}
module.exports = renderer;

/*
  console.log(await renderer("mainPage", data));

/app/pages/mainPage/template_mainPage.html
app/pages/mainPage/template_mainPage.html"
*/