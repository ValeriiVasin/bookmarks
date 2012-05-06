App.templates = (function ($) {
  var engines = {};
  return {
    get: function (name) {
      var jqEl;
      jqEl = $("script[data-name='"+ name +"']");
      if (jqEl.length === 0) {
        throw new Error("Template '" + name + "' not found.");
      }
      if (!engines[name]) {
        engines[name] = _.template(jqEl.html());
      }
      return engines[name];
    }
  };
}(jQuery));
