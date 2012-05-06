(function ($) {
  var PubSub = $({});
  App.subscribe = function (type, fn) {
    var wrapper = function () {
      return fn.apply(this, Array.prototype.slice.call(arguments, 1));
    };
    wrapper.guid = fn.guid = fn.guid || ($.guid ? $.guid++ : $.event.guid++);
    PubSub.on(type, wrapper);
  };

  App.publish = function (type, data) {
    PubSub.trigger(type, data);
  };

  App.unsubscribe = function (type, fn) {
    PubSub.off(type, fn);
  };
}(jQuery));