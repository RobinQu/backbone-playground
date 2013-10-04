define(["require", "backbone", "views/query_list"], function (require, Backbone) {
  
  // var ENTER_KEY = 13;
  
  return Backbone.View.extend({
    
    el: "#searchForm",
        
    events: {
      "submit": "createQuery",
      "focus input": "startInput"
    },
    
    initialize: function () {
      var app = require("app");
      this.$input = this.$("input").focus();
      this.listenTo(app, "search", this.startSearch);
    },
    
    startInput: function (e) {
      e.preventDefault();
      var that = this;
      setTimeout(function () {
        that.$input[0].select();
      }, 0);
      
    },
    
    startSearch: function (q) {
      this.$input.val(q);
    },
    
    createQuery: function (e) {
      var app = require("app"),
      query = app.Queries.create({
        text: this.$input.val()
      });
      // this.$input.val("");
      e.preventDefault();
      app.router.navigate("search/" + query.get("text"), {trigger: true});
    }
    
  });
});