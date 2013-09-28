define(["backbone", "templates"], function (Backbone, GalleryTemplates) {
  return Backbone.View.extend({
    
    el: "#gallery .navigation",
    
    template: GalleryTemplates.pagination,
    
    initialize: function () {
      this.on("turn", this.render, this);
    },
    
    render: function (data) {
      this.$el.empty().append(this.template(data));
      return this;
    }
    
  });
});