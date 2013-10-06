define(["backbone", "jquery", "underscore", "views/outlet", "views/searchbar", "routes/router", "collections/queries"], function (Backbone, $, _, OutletView, SearchbarView, Workspace, QueriesCollection) {

  var app = _.extend({
    results: {}
  }, Backbone.Events);
  app.initialize = function () {
    app.router = new Workspace();
    app.Queries = new QueriesCollection();
    
    $(document).ready(function () {
      app.outletView = new OutletView();
      app.searchbar = new SearchbarView();
      console.log("views are preloaded");
      Backbone.history.start();
    });
  };
  return app;
});