App.models.bookmark = Backbone.Model.extend({
  initialize: function () {
    _.bindAll(this, 'onChange');
    this.on('change', this.onChange);
  },
  onChange: function () {
    if (this.hasChanged("title") || this.hasChanged("url") || this.hasChanged("description")) {
      this.save();
    }
  },
  getDomain: function () {
    var url = this.get('url'),
        matches,
        domain;

    if ( (matches = url.match(/^(?:https?:\/\/)?([^\/?]+).*$/)) && (domain = matches[1].match(/\.(.{2,4})$/)) ) {
      return domain ? domain[1] : false;
    } else {
      return false;
    }
  }
});