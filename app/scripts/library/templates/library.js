define(['handlebars'], function(Handlebars) {

this["tpls"] = this["tpls"] || {};

this["tpls"]["book"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\"";
  if (stack1 = helpers.coverImage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.coverImage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n<ul>\n    <li>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li>";
  if (stack1 = helpers.author) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li>";
  if (stack1 = helpers.releaseDate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.releaseDate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <li>";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n</ul>\n\n<button class=\"delete\">Delete</button>\n";
  return buffer;
  });

return this["tpls"];

});