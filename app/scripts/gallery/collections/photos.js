define(["backbone", "models/photo", "localstorage"], function (Backbone, Photo) {
  
  return Backbone.Collection.extend({
    
    model: Photo,
    
    nextFor: function(p) {
      var idx = this.indexOf(typeof p === "string" ? this.get(p) : p);
      if(idx === -1) {
        return null;
      }
      return this.at(idx+1);
    },
    
    prevFor: function(p) {
      var idx = this.indexOf(typeof p === "string" ? this.get(p) : p);
      if(idx === -1 || idx === this.length - 1) {
        return null;
      }
      return this.at(idx-1);
    }
    
  });
  
});