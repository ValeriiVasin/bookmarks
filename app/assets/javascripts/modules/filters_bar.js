App.createModule('filters-bar', function () {
  var container,
      resetFilter,
      convertToArray,
      updateFilterState;

  resetFilter = function (data) {
    var tmpl = App.templates.get('filter');
    if (!_.isObject(data)) {
      throw new Error("Filter data should be an object");
    }
    container.empty().html(tmpl({ domains: convertToArray(data) }));
  };

  convertToArray = function (data) {
    return _.chain(data)
            .map(function (value, key) {
              return { domain: key, count: value };
            })
            .sortBy(function (obj) {
              return -obj.count;
            })
            .value();
  };

  updateFilterState = function () {
    var data = container.find('input:checkbox:checked').map(function () {
      return this.value;
    }).get();
    App.publish('filter:update', data);
  };

  return {
    init: function () {
      container = $('.filter');
      container.on('change', 'input:checkbox', updateFilterState);
      App.subscribe('filter:reset', resetFilter);
    },
    destroy: function () {
      container.off().empty();
      App.unsubscribe('filter:reset', resetFilter);
    }
  };
});