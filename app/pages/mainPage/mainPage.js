/**
 * @typedef {import("../../../node_modules/gbackend/typedef.js").gBackendRequest} gBackendRequest
 */

/**
 * an index page browsable by search engine
 *
 * @param   {gBackendRequest}    request         [pageSpecs description]
 *
 * @constructor
 */
module.exports = function (request, page) {
  return {
    data : {
      "meta": {
        "description": "demonstration page of g-Backend", //50 < description < 160
        "image": "",
        "siteName": "demo gBackend",
        "siteUrl": "localhost:3000",
        "slug": request.uri,
        "title": "g-Backend | hello world", //titre <= 60 (77 max max)
      },
      "title": "hello World"
    },
    template : "pages/mainPage/template_mainPage.html",
    typeMime : "html",
  };
};