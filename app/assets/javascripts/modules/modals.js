App.createModule('modals', function () {
  var modal,
      createModal,
      showModalForm,
      newForm,
      editForm,
      defaultFields,
      modalData;

  defaultFields = { url: '', title: '', description: '' };

  createModal = function () {
    modal = $('<div />', { 'class': 'modal' });
    modal.on('hide', function () {
      App.publish('modal-hide');
    });
    modal.on('click', 'a', function () {
      var type = $(this).data('type');
      switch (type) {
        case 'create':
          App.publish('bookmark:create', modalData());
          break;
        case 'update':
          App.publish('bookmark:update', modalData());
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
    };
  };

  showModalForm = function (type, fields) {
    var tmpl, defaults;
    if (arguments.length !== 2) {
      throw new Error("Type and fields should be specified");
    }
    if (!App.templates) {
      throw new Error("Templates engine should be loaded before continue.");
    }
    tmpl = App.templates.get('edit-template');
    fields = $.extend({type: type}, defaultFields, fields || {});
    modal.empty().append(tmpl(fields)).modal('show');
  };

  newForm = function (data) {
    showModalForm('new', data);
  };

  editForm = function (data) {
    showModalForm('edit', data);
  };

  return {
    init: function () {
      createModal();
      App.subscribe('modal:new', newForm);
      App.subscribe('modal:edit', editForm);
    },
    destroy: function () {
      modal.remove();
      App.unsubscribe('modal:new', show);
      App.unsubscribe('modal:edit', edit);
    }
  };
});
