/*global alert */

define(["require", "backbone", "underscore", "jquery", "templates", "models/photo", "utils/flickr", "app", "views/photo", "hammer"], function (require, Backbone, _, $, GalleryTemplates, Photo, flickr) {
  
  return Backbone.View.extend({
    
    el: "#lightbox",
    
    initialize: function () {
      var app = require("app");
      // this.listenTo(app, "view", this.loadPhoto);
      // this.listenTo(this.model, "change", this.render);
      require("hammer");
      this.listenTo(app, "search", this.hide);
      this.$info = this.$(".info");
      this.$el.hammer();
    },
    
    events: {
      "click .back-btn": "goBack",
      "load img": "stopLoading",
      "swipe .content": "navigate"
    },
    
    test: function() {
      alert("hehe");
    },
    
    load: function(id) {
      this.loadPhoto(id);
    },
    
    template: GalleryTemplates.lightbox,
    
    goBack: function (e) {
      console.log("go back btn");
      window.history.back();
      e.preventDefault();
    },
    
    navigate: function(e) {
      var app = require("app");
      if(app.currentCollection) {
        var next;
        alert(e.direction);
        if(e && e.direction === "left") {
          next = app.currentCollection.prevFor(this.model);
        } else {
          next = app.currentCollection.nextFor(this.model);
        }
        if(next) {
          app.router.navigate("view/"+next.id, {trigger:true});
        }
      }
    },
    
    loadPhoto: function (id) {
      var app = require("app");
      this.startLoading();
      if(app.currentCollection && app.currentCollection.get(id)) {
        this.model = app.currentCollection.get(id);
        this.render();
      } else {
        flickr.getInfo(id).done(this.handleResponse.bind(this)).fail(this.showError.bind(this));
      }
    },
    
    showInfo: function (content) {
      this.$info.html(content);
    },
        
    hideInfo: function () {
      this.$info.empty().hide();
    },
    
    startLoading: function () {
      this.showInfo("Loading Photo...");
    },
    
    stopLoading: function () {
      this.hideInfo();
    },
    
    showError: function () {
      this.showInfo("Failed to load this photo. <a href='/'>Go Back</a>");
    },
    
    handleResponse: function (resp) {
      var data = resp.photo;
      if(resp.stat === "fail") {
        // alert(resp.message);
        return;
      }
      data.tags = _.compact(data.tags.tag.map(function(t) {
        return t._content;
      }));
      this.model = new Photo(data);
      this.render();
    },
    
    render: function () {
      var app = require("app"),
          context = {};
      if(app.currentCollection) {
        context.next = app.currentCollection.nextFor(this.model);
        context.prev = app.currentCollection.prevFor(this.model);
      }
      context.photo = this.model.toJSON();
      console.log(context);
      this.$el.html(this.template(context));
      this.delegateEvents();
    }
    
  });
  
});