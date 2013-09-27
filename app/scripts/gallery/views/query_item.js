define(["backbone", "jquery", "templates"], function (Backbone, $, GalleryTemplates) {
  return Backbone.View.extend({
    
    tagName: "li",
    
    template: GalleryTemplates.query,
    
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
    
  });
});