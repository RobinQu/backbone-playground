define(["backbone", "jquery", "models/message", "localstorage"], function (Backbone, $, Message) {
  
  return Backbone.Collection.extend({
    
    model: Message,
    
    baseurl: "http://localhost:2403/moments/",
    
    url: function () {
      return this.baseurl + "?" + $.param({
        author: this.author
      });
    }
    
  });
  
});