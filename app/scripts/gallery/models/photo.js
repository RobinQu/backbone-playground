define(["backbone", "underscore"], function (Backbone, _) {
  
  var URL = _.template("http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg");
  
  return Backbone.Model.extend({
    
    imageURL: function () {
      return URL(this.toJSON());
    }
    
  });
});