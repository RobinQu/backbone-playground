define(["backbone", "templates"], function (Backbone, templates) {
  return Backbone.View.extend({
    tagName: "div",
    className: "bookContainer",
    template: templates.book,

    events: {
      "click .delete": "deleteBook"
    },

    render: function() {
      //this.el is what we defined in tagName. use $el to get access to jQuery html() function
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    },
    
    deleteBook: function() {
      //Delete model
      this.model.destroy();

      //Delete view
      this.remove();
    }
    
  });
});