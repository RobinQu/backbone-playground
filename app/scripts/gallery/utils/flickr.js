define(["jquery", "underscore"], function ($, _) {
  
  var flickr = {};
  
  flickr.endponit = "http://api.flickr.com/services/rest/?jsoncallback=?";
  flickr.key = "405223b17311488a31506c64b0c0a13d";
  flickr.secret = "c9b4b40bcd4cfc92";
  flickr.request = function (options) {
    return $.getJSON(flickr.endponit, _.extend(options, {
      method: options.method,
      "api_key": flickr.key,
      format: "json"
    }));
  };
  
  flickr.search = function (options) {
    return flickr.request(_.extend(options, {
      method: "flickr.photos.search"
    }));
  };
  
  flickr.getInfo = function (id) {
    return flickr.request({
      method: "flickr.photos.getInfo",
      "photo_id": id
    });
  };
  
  return flickr;
  
});