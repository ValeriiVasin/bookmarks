// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require lib/underscore-1.3.3.min
//= require lib/backbone-0.9.2.min
//= require_self
//= require modules/template_engine
//= require modules/pub_sub
//= require_directory ./models
//= require_directory ./collections
//= require_directory ./views
//= require_directory ./modules
//= require_directory ./routers
//= require_tree .

var App = {
  models: {},
  collections: {},
  views: {},
  modules: {},
  createModule: function (name, creator) {
    if (typeof creator !== 'function') {
      throw new Error("Can't create module "+ name +". Second parameter should be a function.");
    }
    this.modules[name] = {
      create: creator,
      instance: null
    }
  },
  start: function (name) {
    var instance,
        mod = this.modules[name];
    if (!mod) {
      throw new Error("Module "+ name +" failed to start. It hasn't been registered yet.");
    } else {
      instance = mod.create.call(this);
      if (instance && instance.init && instance.destroy) {
        mod.instance = instance;
        mod.instance.init();
      } else {
        throw new Error("Module "+ name +" should return object that contains functions 'init' and 'destroy'");
      }
    }
  },
  startAll: function () {
    var moduleName;
    for (moduleName in this.modules) {
      if (this.modules.hasOwnProperty(moduleName)) {
        this.start(moduleName);
      }
    }
  },
  stop: function(name) {
    var instance,
        mod = this.modules[name];
    if (mod && mod.instance) {
      mod.instance.destroy();
      mod.instance = null;
    } else {
      throw new Error("Module "+ name +" failed to stop. It hasn't been registered or started yet.");
    }
  },
  stopAll: function() {
    var moduleName;
    for (moduleName in this.modules) {
      if (this.modules.hasOwnProperty(moduleName)) {
        this.stop(moduleName);
      }
    }
  }
};

$(function () {
  var router = new App.Router();
  App.subscribe('modal-hide', function () {
    router.navigate('archive', {trigger: true});
  });
  App.startAll();
  Backbone.history.start();
});