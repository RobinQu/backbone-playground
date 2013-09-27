define(["backbone", "models/query", "localstorage"], function (Backbone, Query) {
  
  return Backbone.Collection.extend({
    
    model: Query,
    
    localStorage: new Backbone.LocalStorage("gallery-queries")
    
  });
  
});