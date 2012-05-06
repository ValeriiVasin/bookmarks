App.templates = (function ($) {
  var engines = {};
  return {
    get: function (name) {
      var jqEl;
      if (!engines[name]) {
        jqEl = $("script[data-name='"+ name +"']");
        if (jqEl.length === 0) {
          throw new Error("Template '" + name + "' not found.");
        }
        engines[name] = _.template(jqEl.html());
        jqEl.remove();
      }
      return engines[name];
    }
  };
}(jQuery));
