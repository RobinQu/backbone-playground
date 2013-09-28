define(["backbone", "models/photo", "localstorage"], function (Backbone, Photo) {
  
  return Backbone.Collection.extend({
    
    model: Photo
    
  });
  
});