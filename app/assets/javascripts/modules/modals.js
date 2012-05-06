(function ($) {

  modal = function (options) {
    var tmpl, jqEl;
    if (!options.type) {
      throw new Error("options.type should be specified.");
    }
    tmpl = App.templates.get('edit-template');
    options = $.extend({
      title: '',
      description: '',
      url: ''
    }, options || {});

    jqEl = $(tmpl(options));
    $('.modal').empty().append(jqEl).modal('show');
  };

  App.subscribe('show-modal', function (e, data) {
    modal(data);
  });

}(jQuery));

$(function () {
  var $modal = $('.modal');

  $modal.on('click', 'a', function () {
    var type = $(this).data('type'),
        $modal = $('.modal'),
        data;

    switch (type) {
      case 'submit':
        data = {
          url: $modal.find('#url').val(),
          title: $modal.find('#title').val(),
          description: $modal.find('#description').val()
        };
        App.publish('create-bookmark', data);
        break;
      case 'destroy':
        break;
    }
    $modal.modal('hide');
    return false;
  });
  
  $modal.on('hide', function () {
    App.publish('modal-hide')
  });
});