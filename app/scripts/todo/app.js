define(["jquery", "underscore", "backbone", "models/todo", "collections/todos", "views/app", "routers/router"], function ($, _, Backbone, Todo, TodoList, AppView, Workspace) {
  
  var app = {};
  
  app.Todo = Todo;
  app.Todos = new TodoList();
  app.AppView = AppView;
  app.TudoRouter = new Workspace();
  app.initialize = function () {
    $(function () {
      return new app.AppView();
    });
    Backbone.history.start();
    return this;
  };
  
  return app;
});