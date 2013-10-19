define(["marionette", "templates", "views/composer", "views/heading"], function (Marionette, templates, ComposerView, HeadingView) {

  return Marionette.Layout.extend({
    
    template: templates.header,
    
    regions: {
      "heading": ".heading-view",
      "composer": ".composer-view"
    },
    
    onRender: function () {
      this.heading.show(new HeadingView());
      this.composer.show(new ComposerView());
    }
    
  });
  
});