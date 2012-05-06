App.createModule('modals', function () {
  var modal,
      createModal,
      showModal,
      modalData;

  createModal = function () {
    modal = $('<div />', {class: 'modal'});
    modal.on('hide', function () {
      App.publish('modal-hide');
    });
    modal.on('click', 'a', function () {
      var type = $(this).data('type');
      switch (type) {
        case 'create':
          console.log('create', modalData());
          App.publish('create-bookmark', modalData());
          break;
        // TODO: implement update - id of model is needed
        case 'update':
          console.log('create', modalData());
          App.publish('update-bookmark', modalData());
          break;
        // TODO: implement destroy
        case 'destroy':
          break;
      }
      modal.modal('hide');
      return false;
    });
    $(document.body).append(modal);
  };

  modalData = function () {
    return {
      url: modal.find('#url').val(),
      title: modal.find('#title').val(),
      description: modal.find('#description').val()
    }
  };

  showModal = function (options) {
    var tmpl, defaults;
    if (!options.type) {
      throw new Error("Type of modal action (new or edit) should be specified.");
    }
    if (!App.templates) {
      throw new Error("Templates engine should be loaded before continue.");
    }
    tmpl = App.templates.get('edit-template');
    options = $.extend({
      url: '',
      title: '',
      description: ''
    }, options || {});
    modal.empty().append(tmpl(options)).modal('show');
  };

  return {
    init: function () {
      createModal();
      App.subscribe('modal-show', showModal);
    },
    destroy: function () {
      modal.remove();
    }
  };
});
