/**
 * @typedef {import("../../../node_modules/gbackend/typedef.js").gBackendRequest} gBackendRequest
 */

const Page = require("gbackend").page;
module.exports = class MainPage extends Page {
  /**
   * an index page browsable by search engine
   *
   * @param   {gBackendRequest}    pageSpecs         [pageSpecs description]
   *
   * @constructor
   */
  constructor(pageSpecs) {
    super(pageSpecs);
  }
  
  method_GET() {
    try {
      this.data = {
        "meta": {
          "description"   : "demonstration page of g-Backend", //50 < description < 160
          "image"         : "",
          "slug"          : this.request.uri,
          "title"         : "g-Backend | hello world", //titre <= 60 (77 max max)
          "siteName"     : "demo gBackend",
          "siteUrl" : "localhost:3000",
        },
        "text" : "hello World"
      };
      this.template = "pages/mainPage/template_mainPage.html";
    }
    catch (err) {
      throw err;
    }
  }
}
