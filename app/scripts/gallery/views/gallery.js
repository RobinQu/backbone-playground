define(["require", "backbone", "jquery", "collections/photos", "views/photo", "utils/flickr"], function (require, Backbone, $, PhotosCollection, PhotoView, flickr) {
  return Backbone.View.extend({
    
    el: "#gallery .photos",
    
    initialize: function () {
      this.$info = this.$("div.info");
      this.$list = this.$("ul.list");
      this.on("search", this.runQuery);
    },
    
    results: {},
    
    content: null,
    
    updateCollectionByQuery: function (q) {
      if(this.content) {
        this.content.invoke("trigger", "obsolete");
        this.stopListening(this.content);
      }
      
      var c = this.results[q];
      if(!c) {
        this.results[q] = c = new (PhotosCollection.extend({
          localStorage: new Backbone.LocalStorage("serach-results-" + q)
        }))();
      }
      this.content = c;
      this.listenTo(this.content, "reset", this.addAll);
      this.listenTo(this.content, "add", this.addOne);
      this.listenTo(this.content, "all", this.render);
      c.fetch();
      console.log("offline data", c.length);
      return c;
    },
    
    runQuery: function (q) {
      var app = require("app");
      app.Queries.create({text:q});
      this.updateCollectionByQuery(q);
      if(window.navigator.onLine) {
        flickr.search({
          text: q,
          "per_page": 10
        })
        .done(this.handleResults.bind(this))
        .fail(this.showFailure.bind(this));
        this.showLoading();
      }
    },
    
    showInfo: function (text) {
      this.$info.text(text).show();
    },
    
    hideInfo: function () {
      this.$info.hide();
    },
    
    showLoading: function () {
      this.showInfo("Loading...");
    },
    
    dismisLoading: function () {
      this.hideInfo();
    },
    
    handleResults: function (data) {
      var photos = data.photos.photo;
      console.log("receiving data", photos.length);
      this.dismisLoading();
      
      while(this.content.length) {
        this.content.at(0).destroy();
      }
      if(photos.length) {
        console.log(this.content.length);
        this.content.reset(photos);
        console.log(this.content.length);
      } else {
        this.content.reset();
      }
      this.content.invoke("save");
    },
    
    showFailure: function () {
      this.dismisLoading();
    },
    
    addOne: function (item) {
      var view = new PhotoView({model: item});
      this.$list.append(view.render().el);
      console.log("append", item.id);
    },
    
    addAll: function () {
      this.content.each(this.addOne, this);
    },
    
    render: function () {
      // console.log("reset data", this.content.length);
      return this;
    }
    
  });
});