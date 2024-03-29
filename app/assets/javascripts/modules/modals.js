App.createModule('modals', function () {
  var modal,
      createModal,
      showModalForm,
      newForm,
      editForm,
      share,
      defaultFields,
      modalData,
      validate;

  defaultFields = { url: '', title: '', description: '' };

  validate = function (data, type) {
    var result = true,
        urlRegExp = /^(?:https?:\/\/)?.+?\.[\w]{2,4}/,
        emailRegExp = /^[\w\d]*@.+\.\w{2,4}/;

    function generateError(field, message) {
      var el = modal.find(field),
          controlGroup = el.closest('.control-group');
      controlGroup.addClass('error').find('.help-block').text(message);
      el.one('keydown', function (e) {
        controlGroup.removeClass('error');
      });
      result = false;
    }

    $.each(data, function (key, value) {
      data[key] = $.trim(value);
    });

    if (type === 'share') {
      if (!data.email) {
        generateError('#email', "Email can't be blank");
      } else if (!emailRegExp.test(data.email)) {
        generateError('#email', "Email address is not valid");
      }
    } else {
      if (!data.title) {
        generateError('#title', "Title can't be blank.");
      }
      if (!data.url) {
        generateError('#url', "URL can't be blank.");
      } else if (!urlRegExp.test(data.url)) {
        generateError('#url', "URL is not valid.");
      }
    }
    return result;
  };

  createModal = function () {
    modal = $('<div />', { 'class': 'modal' });
    modal.on('submit', 'form', function () {
      modal.find('a.btn-primary').trigger('click');
      return false;
    });
    modal.on('hide', function () {
      App.router.navigate('archive', {trigger: true});
    });
    modal.on('click', 'a', function () {
      var type = $(this).data('type'),
          valid = true,
          shareEmail,
          shareUrl,
          data;
      switch (type) {
        case 'create':
          data = modalData();
          if (valid = validate(data, 'create')) {
            App.publish('bookmark:create', data);
          }
          break;
        case 'update':
          data = modalData();
          if (valid = validate(data, 'update')) {
            App.publish('bookmark:update', data);
          }
          break;
        case 'destroy':
          App.publish('bookmark:destroy');
          break;
        case 'share':
          shareEmail = modal.find('#email').val();
          if (valid = validate({email: shareEmail}, 'share')) {
            shareUrl = modal.find('form').attr('action');
            App.publish('bookmark:share', {email: shareEmail, url: shareUrl});
          }
          break;
      }
      if (valid) {
        modal.modal('hide');
      }
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

  share = function (bookmarkId) {
    var tmpl, id;
    if (_.isNumber(bookmarkId)) {
      tmpl = App.templates.get('share');
      modal.empty().append( tmpl({id: bookmarkId}) ).modal('show');
    } else {
      throw new Error("Bookmark ID should be a number");
    }
  };

  return {
    init: function () {
      createModal();
      App.subscribe('modal:new', newForm);
      App.subscribe('modal:edit', editForm);
      App.subscribe('modal:share', share);
    },
    destroy: function () {
      modal.remove();
      App.unsubscribe('modal:new', show);
      App.unsubscribe('modal:edit', edit);
      App.unsubscribe('modal:share', share);
    }
  };
});
