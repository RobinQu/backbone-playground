define(["backbone", "jquery", "underscore", "views/searchbar", "views/gallery", "views/lightbox", "views/query_list", "routes/router", "collections/queries"], function (Backbone, $, _, SearchbarView, GalleryView, LightboxView, QueryListView, Workspace, QueriesCollection) {

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
      app.querylist = new QueryListView();
      console.log("views are preloaded");
      Backbone.history.start();
    });
  };
  return app;
});