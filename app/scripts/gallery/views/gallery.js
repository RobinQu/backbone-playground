define(["require", "backbone", "jquery", "collections/photos", "views/pagination", "views/photo", "utils/flickr"], function (require, Backbone, $, PhotosCollection, PaginationView, PhotoView, flickr) {
  return Backbone.View.extend({
    
    el: "#photos",

    initialize: function () {
      var app = require("app");
      this.$info = this.$("div.info");
      this.$list = this.$("ul.list");
      this.listenTo(app, "search", this.runQuery);
      this.content = null;
      this.query = null;
      this.paginationView = new PaginationView();
    },
    
    updateCollectionByQuery: function (q) {
      if(this.content) {
        this.content.invoke("trigger", "obsolete");
        this.stopListening(this.content);
      }
      
      var app = require("app"),
          c = app.results[q];
      if(!c) {
        // this.results[q] = c = new (PhotosCollection.extend({
        //   localStorage: new Backbone.LocalStorage("serach-results-" + q)
        // }))();
        app.results[q] = c = new PhotosCollection();
      }
      this.content = app.currentCollection = c;
      this.listenTo(this.content, "reset", this.addAll);
      this.listenTo(this.content, "add", this.addOne);
      this.listenTo(this.content, "all", this.render);
      // c.fetch();
      console.log("offline data", c.length);
      return c;
    },
    
    runQuery: function (q, page) {
      console.log("search", q, "page", page);
      var app = require("app");
      this.showList();
      this.query = app.Queries.create({text:q});
      this.updateCollectionByQuery(q);
      if(window.navigator.onLine) {
        this.paginationView.trigger("turn:start");
        flickr.search({
          text: q,
          "per_page": 30,
          page: page || 1
        })
        .done(this.handleResults.bind(this))
        .fail(this.showFailure.bind(this));
        this.showLoading();
      }
    },
    
    showList: function () {
      this.$list.show();
    },
    
    hideList: function () {
      this.$list.hide();
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
      this.paginationView.trigger("turn:end", {
        current: data.photos.page,
        pages: Math.min(data.photos.pages, 10000),
        query: this.query.get("text"),
        //flickr limits result totals
        total: data.photos.total,
        available: photos.length
      });
      this.dismisLoading();
      // while(this.content.length) {
      //   this.content.at(0).destroy();
      // }
      if(photos.length) {
        // console.log(this.content.length);
        this.content.reset(photos);
        // console.log(this.content.length);
      } else {
        this.content.reset();
      }
      
      // save to localstorage if neccessary
      // this.content.invoke("save");
      console.log("final size", this.content.length);
    },
    
    showFailure: function () {
      this.dismisLoading();
    },
    
    addOne: function (item) {
      var view = new PhotoView({model: item});
      this.$list.append(view.render().el);
      // console.log("append", item.id);
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