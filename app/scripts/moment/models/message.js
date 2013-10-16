define(["backbone", "models/user"], function (Backbone, User) {
  return Backbone.Model.extend({
    defaults: {
      content: "",
      ctime: 0,
      authorId: 0
    },
    
    getAuthor: function () {
      return User.get(this.get("authorId"));
    }
    
  });
  
});