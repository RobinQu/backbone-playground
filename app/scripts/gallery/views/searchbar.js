define(["require", "backbone", "views/query_list"], function (require, Backbone, QueryListView) {
  
  // var ENTER_KEY = 13;
  
  return Backbone.View.extend({
    
    el: "#gallery form",
        
    events: {
      "submit": "createQuery"
    },
    
    initialize: function () {
      this.listView = new QueryListView();
      this.$input = this.$("input").focus();
    },
    
    createQuery: function (e) {
      var app = require("app"),
      query = app.Queries.create({
        text: this.$input.val()
      });
      this.$input.val("");
      e.preventDefault();
      app.router.navigate("search/" + query.get("text"));
    }
    
  });
});