(function ($) {
  var PubSub = $({});
  App.subscribe = function (type, fn) {
    PubSub.on(type, fn);
  };

  App.publish = function (type, data) {
    PubSub.trigger(type, data);
  };

  App.unsubscribe = function (type, fn) {
    PubSub.off(type, fn);
  };
}(jQuery));