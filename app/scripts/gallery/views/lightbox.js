define(["require", "backbone", "underscore", "jquery", "templates", "models/photo", "utils/flickr"], function (require, Backbone, _, $, GalleryTemplates, Photo, flickr) {
  
  return Backbone.View.extend({
    
    el: "#lightbox",
    
    initialize: function () {
      var app = require("app");
      this.listenTo(app, "view", this.loadPhoto);
      // this.listenTo(this.model, "change", this.render);
      this.listenTo(app, "search", this.hide);
      this.$info = this.$(".info");
    },
    
    events: {
      "click .back-btn": "goBack",
      "load img": "stopLoading"
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
    
    loadPhoto: function (id) {
      var app = require("app");
      this.startLoading();
      if(app.currentCollection) {
        this.model = app.currentCollection.get(id);
        this.render();
      } else {
        flickr.getInfo(id)
        .done(this.handleResponse.bind(this))
        .fail(this.showError.bind(this));
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
      this.model = new Photo(data);
      console.log(data, this.model.toJSON());
      this.render();
      
    },
    
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      console.log(this.$("img"));
      this.delegateEvents();
    }
    
  });
  
});