define(["marionette", "templates"], function (Marionette, templates) {
  
  return Marionette.ItemView.extend({
    
    template: templates.composer
      
    // render: function () {
    //   this.$el.html(this.template());
    // }
    
  });
  
});