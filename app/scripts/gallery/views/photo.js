define(["require", "backbone", "models/photo", "templates", "handlebars", "underscore"], function (require, Backbone, Photo, GalleryTemplates, Handlebars,  _) {
  
  var URL = _.template("http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_<%= size %>.jpg");
  
  Handlebars.registerHelper("imgurl", function (photo, options) {
    var size = (typeof options.hash.size === "string") ? options.hash.size : "s";
    return URL(_.extend({
      size: size
    }, photo));
  });
  
  return Backbone.View.extend({
    
    tagName: "li",
    
    template: GalleryTemplates.photo,
    
    initialize: function () {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
      this.listenTo(this.model, "obsolete", this.remove);
    },
    
    render: function () {
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    }
    
  });
  
});