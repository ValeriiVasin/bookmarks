App.models.bookmark = Backbone.Model.extend({
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