define(["handlebars"], function (Handlebars) {
  
  Handlebars.registerHelper("gt", function (value, test, options) {
    if (value > test) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  
  return Handlebars;
  
});