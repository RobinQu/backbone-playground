define(["require", "jquery", "backbone", "views/query_item"], function (require, $, Backbone, QueryItemView) {
  return Backbone.View.extend({
    
    el: "#gallery .query-histroy",
    
    initialize: function () {
      var app = require("app");
      this.listenTo(app.Queries, "add", this.addOne);
      this.listenTo(app.Queries, "reset", this.addAll);
      app.Queries.fetch();
    },
    
    addOne: function (query) {
      var item = new QueryItemView({model:query});
      this.$el.append(item.render().el);
    },
    
    addAll: function () {
      var app = require("app");
      this.$el.empty();
      app.Queries.each(this.addOne, this);
      return this;
    }
    
    
  });
});