define(["backbone", "jquery", "underscore", "views/searchbar", "views/gallery", "views/lightbox", "routes/router", "collections/queries"], function (Backbone, $, _, SearchbarView, GalleryView, LightboxView, Workspace, QueriesCollection) {

  var app = _.extend({
    results: {}
  }, Backbone.Events);
  app.initialize = function () {
    app.router = new Workspace();
    app.Queries = new QueriesCollection();
    
    $(function () {
      app.searchbar = new SearchbarView();
      app.gallery = new GalleryView();
      app.lightbox = new LightboxView();
      Backbone.history.start();
    });
  };
  return app;
});