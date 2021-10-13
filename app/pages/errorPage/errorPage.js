module.exports = function (request, page) {
  return {
    data : {
      "errorStatus": request.errors.status
    },
    template : "pages/errorPage/template_errorPage.html"
  };
};