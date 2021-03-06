// Generated by CoffeeScript 1.6.1

define(function(require, exports, module) {
  var Backbone, StateMachine, _;
  _ = require("underscore");
  Backbone = require("backbone");
  StateMachine = function() {};
  _.extend(StateMachine.prototype, Backbone.Events);
  StateMachine.prototype.add = function(view) {
    var _this = this;
    this.on("change", function(curr) {
      if (curr === view) {
        return view.activate();
      } else {
        return view.deactivate();
      }
    }, this);
    return view.active = function() {
      return _this.trigger("change", view);
    };
  };
  return module.exports = StateMachine;
});
