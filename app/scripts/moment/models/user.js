define(["backbone"], function (Backbone) {
  return Backbone.Model.extend({
    
    defaults: {
      username: "",
      ctime: 0,
      email: ""
    }
    
  });
});