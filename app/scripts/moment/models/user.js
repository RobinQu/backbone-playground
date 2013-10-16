define(["backbone"], function (Backbone) {
  return Backbone.Model.extend({
    
    defaults: {
      name: "",
      ctim: 0,
      email: ""
    }
    
  });
});