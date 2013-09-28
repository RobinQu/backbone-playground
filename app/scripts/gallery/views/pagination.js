define(["backbone", "templates"], function (Backbone, GalleryTemplates) {
  return Backbone.View.extend({
    
    el: "#gallery .navigation",
    
    template: GalleryTemplates.pagination,
    
    initialize: function () {
      this.on("turn:start", this.beginTurning, this);
      this.on("turn:end", this.render, this);
    },
    
    beginTurning: function () {
      this.$el.empty();
    },
    
    render: function (data) {
      this.$el.append(this.template(data));
      return this;
    }
    
  });
});