define(['handlebars'], function(Handlebars) {

this["app"] = this["app"] || {};
this["app"]["tpls"] = this["app"]["tpls"] || {};

this["app"]["tpls"]["stats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "items";
  }

function program3(depth0,data) {
  
  
  return "item";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<button id=\"clear-completed\">Clear completed (";
  if (stack1 = helpers.completed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.completed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</button>\n";
  return buffer;
  }

  buffer += "<span id=\"todo-count\"><strong>";
  if (stack1 = helpers.remaining) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.remaining; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> ";
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.gt || depth0.gt),stack1 ? stack1.call(depth0, depth0.remaining, 1, options) : helperMissing.call(depth0, "gt", depth0.remaining, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " left</span>\n<ul id=\"filters\">\n  <li>\n    <a class=\"selected\" href=\"#/\">All</a>\n  </li>\n  <li>\n    <a href=\"#/active\">Active</a>\n  </li>\n  <li>\n    <a href=\"#/completed\">Completed</a>\n  </li>\n</ul>\n\n";
  stack2 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["app"]["tpls"]["todo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "'checked'";
  }

  buffer += "<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, depth0.completed, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n  <label>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n  <button class=\"destroy\"></button>\n</div>\n<input class=\"edit\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  return buffer;
  });

return this["app"]["tpls"];

});