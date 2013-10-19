define(["backbone", "views/header_layout", "views/outlet_layout", "views/footer_layout", "marionette"], function (Backbone, Header, Outlet, Footer) {
  
  var app = new Backbone.Marionette.Application();
  
  app.addRegions({
    header: "#header",
    outlet: "#outlet",
    footer: "#footer"
  });
  
  var header = new Header(),
      outlet = new Outlet(),
      footer = new Footer();
  
  app.addInitializer(function () {
    app.header.show(header);
    app.outlet.show(outlet);
    app.footer.show(footer);
  });
  
  app.on("initialize:after", function() {
    Backbone.history.start();
  });
  
  window.app = app;
  
  return app;
});