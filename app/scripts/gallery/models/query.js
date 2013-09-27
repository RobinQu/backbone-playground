define(["backbone"], function (Backbone) {
  
  return Backbone.Model.extend({
    idAttribute: "text",
    defaults: {
      text: ""
    }
  });
  
});