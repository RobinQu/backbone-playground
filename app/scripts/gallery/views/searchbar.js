define(["require", "backbone", "views/query_list"], function (require, Backbone, QueryListView) {
  
  // var ENTER_KEY = 13;
  
  return Backbone.View.extend({
    
    el: "#searchForm",
        
    events: {
      "submit": "createQuery",
      "focus input": "focusInput",
      "blur input": "collapse",
      "keyup input": "keypressed",
      "click .close-btn": "clearInput",
      "click .home-btn": "endSession"
    },
    
    initialize: function () {
      var app = require("app");
      this.$input = this.$("input");
      this.$clear = this.$(".close-btn");
      this.$home = this.$(".home-btn");
      this.querylist = new QueryListView();
      this.listenTo(app, "search", this.startSearch);
      this.listenTo(app, "view", this.startSession);
      // this.focusInput();
    },
    
    keypressed: function() {
      if(this.$input.val()) {
        this.$clear.show();
      } else {
        this.clearInput();
      }
    },
    
    clearInput: function() {
      this.$input.val("");
      this.$clear.hide();
      this.collapse();
    },
    
    expand: function() {
      var app = require("app");
      app.outletView.$el.hide();
      this.$el.addClass("expanded");
    },
    
    collapse: function() {
      var app = require("app");
      setTimeout(function() {
        this.$el.removeClass("expanded");
        app.outletView.$el.show();
      }.bind(this), 200);
    },
    
    startSession: function() {
      var app = require("app");
      if(app.session) {
        this.$el.addClass("in-session");
        this.$home.attr("href", "#search/" + app.session.text + "/p" + app.session.page);
      }
    },
    
    endSession: function() {
      this.$el.removeClass("in-session");
    },
    
    focusInput: function (e) {
      if(e) {
        e.preventDefault();
      }
      var that = this;
      that.expand();
      setTimeout(function () {
        that.$input.focus();
        that.$input[0].select();
      }, 0);
      
    },
    
    startSearch: function (q) {
      console.log("start search", q);
      this.$input.val(q);
      this.$clear.show();
      this.collapse();
      this.endSession();
    },
    
    createQuery: function (e) {
      var app = require("app"),
          q = this.$input.val();
      e.preventDefault();
      if(q) {
        app.router.navigate("search/" + q, {trigger: true});
      }
    }
    
  });
});