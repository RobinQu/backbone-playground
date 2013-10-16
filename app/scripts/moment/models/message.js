define(["backbone", "models/user"], function (Backbone, User) {
  return Backbone.Model.extend({
    defaults: {
      content: "",
      ctime: 0,
      author: 0
    },
    
    getAuthor: function () {
      return User.get(this.get("author"));
    }
    
  });
  
});