define(["backbone", "jquery", "views/searchbar", "views/gallery", "routes/router", "collections/queries"], function (Backbone, $, SearchbarView, GalleryView, Workspace, QueriesCollection) {

  var app = {};
  app.initialize = function () {
    app.router = new Workspace();
    app.Queries = new QueriesCollection();
    $(function () {
      app.searchbar = new SearchbarView();
      app.gallery = new GalleryView();
      Backbone.history.start();
    });
  };
  return app;
});