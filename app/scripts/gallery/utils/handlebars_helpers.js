define(["handlebars"], function (Handlebars) {
  
  Handlebars.registerHelper("add", function (a, b) {
    return a + b;
  });
  
  Handlebars.registerHelper("subtract", function (a, b) {
    return a - b;
  });
  
  Handlebars.registerHelper("gt", function (a, b, options) {
    if(a > b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  
  Handlebars.registerHelper("lt", function (a, b, options) {
    if(a < b) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  
  
});