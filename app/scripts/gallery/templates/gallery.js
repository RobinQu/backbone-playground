define(['handlebars'], function(Handlebars) {

this["tpls"] = this["tpls"] || {};

this["tpls"]["pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.gt || depth0.gt),stack1 ? stack1.call(depth0, depth0.pages, 1, options) : helperMissing.call(depth0, "gt", depth0.pages, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<ul>\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.gt || depth0.gt),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "gt", depth0.current, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.lt || depth0.lt),stack1 ? stack1.call(depth0, depth0.current, depth0.pages, options) : helperMissing.call(depth0, "lt", depth0.current, depth0.pages, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<p>Total ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ", Page ";
  if (stack1 = helpers.current) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.current; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.pages) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pages; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<p>Total ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ", Only one page</p>\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  <li>\n    <a href=\"#search/";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/p";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.subtract || depth0.subtract),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "subtract", depth0.current, 1, options)))
    + "\">Prev</a>\n  </li>\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  <li>\n    <a href=\"#search/";
  if (stack1 = helpers.query) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.query; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/p";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.add || depth0.add),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "add", depth0.current, 1, options)))
    + "\">Next</a>\n  </li>\n  ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.available, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["tpls"]["photo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\"";
  if (stack1 = helpers.imgurl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.imgurl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  });

this["tpls"]["query"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#search/";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  });

return this["tpls"];

});