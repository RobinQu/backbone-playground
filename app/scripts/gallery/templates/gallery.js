define(['handlebars'], function(Handlebars) {

this["tpls"] = this["tpls"] || {};

this["tpls"]["lightbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"#view/"
    + escapeExpression(((stack1 = ((stack1 = depth0.prev),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"navi-btn prev\"><span><i class=\"icon-chevron-left\"></i></span></a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a href=\"#view/"
    + escapeExpression(((stack1 = ((stack1 = depth0.next),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"navi-btn next\"><span><i class=\"icon-chevron-right\"></i></span></a>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "";
  buffer += "\n    <li><a href=\"#search/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a></li>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n    <li>No tags</li>\n    ";
  }

  buffer += "<div class=\"lightbox\">\n  \n  <div class=\"info\"></div>\n  <div class=\"content\">\n    <img src=\"";
  options = {hash:{
    'size': ("z")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.imgurl || depth0.imgurl),stack1 ? stack1.call(depth0, depth0.photo, options) : helperMissing.call(depth0, "imgurl", depth0.photo, options)))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n    ";
  stack2 = helpers['if'].call(depth0, depth0.prev, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, depth0.next, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n  \n  \n  <ul class=\"tags\">\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.tags), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </ul>\n  \n</div>";
  return buffer;
  });

this["tpls"]["pagination"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n\n<ul class=\"navi clearfix\">\n  ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.gt || depth0.gt),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "gt", depth0.current, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    <a href=\"#search/";
  if (stack2 = helpers.query) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.query; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/p";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.subtract || depth0.subtract),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "subtract", depth0.current, 1, options)))
    + "\">Prev</a>\n  </li>\n  \n  ";
  options = {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.lt || depth0.lt),stack1 ? stack1.call(depth0, depth0.current, depth0.pages, options) : helperMissing.call(depth0, "lt", depth0.current, depth0.pages, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    <a href=\"#search/";
  if (stack2 = helpers.query) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.query; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/p";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.add || depth0.add),stack1 ? stack1.call(depth0, depth0.current, 1, options) : helperMissing.call(depth0, "add", depth0.current, 1, options)))
    + "\">Next</a>\n  </li>\n  \n</ul>\n\n<div class=\"page-counter\">\n";
  options = {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.gt || depth0.gt),stack1 ? stack1.call(depth0, depth0.pages, 1, options) : helperMissing.call(depth0, "gt", depth0.pages, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n  <li class=\"prev active\">\n  ";
  }

function program4(depth0,data) {
  
  
  return "\n  <li class=\"prev\">\n  ";
  }

function program6(depth0,data) {
  
  
  return "\n  <li class=\"next active\">\n  ";
  }

function program8(depth0,data) {
  
  
  return "\n  <li class=\"next\">\n  ";
  }

function program10(depth0,data) {
  
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

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<p>Total ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ", Only one page</p>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.available, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["tpls"]["photo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<a href=\"#view/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <img src=\"";
  options = {hash:{
    'size': ("q")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.imgurl || depth0.imgurl),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "imgurl", depth0, options)))
    + "\" alt=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"photo-thumbnail\" />\n</a>";
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