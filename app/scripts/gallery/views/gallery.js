define(["require", "backbone", "jquery", "collections/photos", "utils/flickr"], function (require, Backbone, $, PhotosCollection, flickr) {
  return Backbone.View.extend({
    
    el: "#gallery .photos",
    
    initialize: function () {
      this.$loading = this.$(".loading");
      this.on("search", this.runQuery);
    },
    
    results: {},
    
    content: null,
    
    updateCollectionByQuery: function (q) {
      if(this.content) {
        this.stopListening(this.content);
      }
      
      var c = this.results[q];
      if(!c) {
        this.results[q] = c = new (PhotosCollection.extend({
          localStorage: new Backbone.LocalStorage("serach-results-" + q)
        }))();
      }
      this.content = c;
      this.listenTo(this.content, "all", this.render);
      this.listenTo(this.content, "add", this.addOne);
      this.listenTo(this.content, "reset", this.addAll);
      c.fetch();
      return c;
    },
    
    runQuery: function (q) {
      var app = require("app");
      app.Queries.create({text:q});
      this.updateCollectionByQuery(q);
      flickr.search({
        text: q,
        "per_page": 10
      })
      .done(this.handleResults.bind(this))
      .fail(this.showFailure.bind(this));
      this.showLoading();
    },
    
    showLoading: function () {
      this.$loading.show();
    },
    
    dismisLoading: function () {
      this.$loading.hide();
    },
    
    handleResults: function (data) {
      this.dismisLoading();
      this.content.reset([]);
      this.content.add(data.photos.photo);
      this.content.invoke("save");
    },
    
    showFailure: function () {
      this.dismisLoading();
    },
    
    addOne: function (item) {
      this.$el.append($("<img />", {src: item.imageURL()}));
    },
    
    addAll: function () {
      this.$el.find("img").remove();
      this.content.each(this.addOne, this);
    },
    
    render: function () {
      
    }
    
  });
});