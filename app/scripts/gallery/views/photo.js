define(["backbone", "models/photo", "templates", "handlebars", "underscore"], function (Backbone, Photo, GalleryTemplates, Handlebars,  _) {
  
  var URL = _.template("http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg");
  
  Handlebars.registerHelper("imgurl", function () {
    return URL(this);
  });
  
  return Backbone.View.extend({
    
    tagName: "li",
    
    template: GalleryTemplates.photo,
    
    initialize: function () {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.del);
      this.listenTo(this.model, "obsolete", this.del);
    },
    
    del: function () {
      // console.log("remove self", this.model.id);
      console.log("ul", this.$el.parents("ul").length);
      this.remove();
      console.log("nodes", this.$el.parents("ul.list").find("li").length);
    },
    
    render: function () {
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    }
    
    
  });
  
});