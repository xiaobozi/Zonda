// Generated by CoffeeScript 1.6.1
/*

Zonda Base64.coffee (c) Degas
https://github.com/smallsmallwolf/Zonda

jQuery port (c) 2010 Carlo Zottmann
http://github.com/carlo/jquery-base64

Original code (c) 2010 Nick Galbreath
http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
define("/assets/vendor/Zonda/util/base64/base64-debug", [ "underscore-debug" ], function(require, exports, module) {
    var JSON_stringify, _, _ALPHA, _PADCHAR, _decode, _encode, _getbyte, _getbyte64;
    _ = require("underscore-debug");
    _PADCHAR = "=";
    _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    JSON_stringify = function(string) {
        var json;
        json = JSON.stringify(string);
        return json.replace(/[\u007f-\uffff]/g, function(c) {
            return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
        });
    };
    _getbyte64 = function(s, i) {
        var idx;
        idx = _ALPHA.indexOf(s.charAt(i));
        if (idx === -1) {
            throw "Cannot decode base64";
        }
        return idx;
    };
    _decode = function(s) {
        var b10, i, imax, pads, x, _i;
        pads = 0;
        imax = s.length;
        x = [];
        s = String(s);
        if (imax === 0) {
            return s;
        }
        if (imax % 4 !== 0) {
            throw "Cannot decode base64";
        }
        if (s.charAt(imax - 1) === _PADCHAR) {
            pads = 1;
            if (s.charAt(imax - 2) === _PADCHAR) {
                pads = 2;
            }
            imax -= 4;
        }
        for (i = _i = 0; _i < imax; i = _i += 4) {
            b10 = _getbyte64(s, i) << 18 | _getbyte64(s, i + 1) << 12 | _getbyte64(s, i + 2) << 6 | _getbyte64(s, i + 3);
            x.push(String.fromCharCode(b10 >> 16, b10 >> 8 & 255, b10 & 255));
        }
        switch (pads) {
          case 1:
            b10 = _getbyte64(s, i) << 18 | _getbyte64(s, i + 1) << 12 | _getbyte64(s, i + 2) << 6;
            x.push(String.fromCharCode(b10 >> 16, b10 >> 8 & 255));
            break;

          case 2:
            b10 = _getbyte64(s, i) << 18 | _getbyte64(s, i + 1) << 12;
            x.push(String.fromCharCode(b10 >> 16));
        }
        return x.join("");
    };
    _getbyte = function(s, i) {
        var x;
        x = s.charCodeAt(i);
        if (x > 255) {
            throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        }
        return x;
    };
    _encode = function(s) {
        var b10, i, imax, x, _i;
        if (arguments.length !== 1) {
            throw "SyntaxError: exactly one argument required";
        }
        s = String(s);
        x = [];
        imax = s.length - s.length % 3;
        if (s.length === 0) {
            return s;
        }
        for (i = _i = 0; _i < imax; i = _i += 3) {
            b10 = _getbyte(s, i) << 16 | _getbyte(s, i + 1) << 8 | _getbyte(s, i + 2);
            x.push(_ALPHA.charAt(b10 >> 18));
            x.push(_ALPHA.charAt(b10 >> 12 & 63));
            x.push(_ALPHA.charAt(b10 >> 6 & 63));
            x.push(_ALPHA.charAt(b10 & 63));
        }
        switch (s.length - imax) {
          case 1:
            b10 = _getbyte(s, i) << 16;
            x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt(b10 >> 12 & 63) + _PADCHAR + _PADCHAR);
            break;

          case 2:
            b10 = _getbyte(s, i) << 16 | _getbyte(s, i + 1) << 8;
            x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt(b10 >> 12 & 63) + _ALPHA.charAt(b10 >> 6 & 63) + _PADCHAR);
        }
        return x.join("");
    };
    return module.exports = {
        decode: function(s) {
            s = _decode(s);
            return JSON.parse(s);
        },
        encode: function(s) {
            s = JSON_stringify(s);
            return _encode(s);
        }
    };
});

// Generated by CoffeeScript 1.6.1
define("/assets/vendor/Zonda/util/dialog/dialog-debug", [ "bootstrap-debug", "underscore-debug", "mustache-debug" ], function(require, exports, module) {
    var $, Mustache, dialog, prefix, tpl, _;
    $ = require("bootstrap-debug");
    _ = require("underscore-debug");
    Mustache = require("mustache-debug");
    tpl = '<div id="zonda-util-dialog" class="modal fade hide" tabindex="-1" role="dialog" aria-hidden="true">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\n<h3>{{title}}</h3>\n</div>\n<div class="modal-body">\n{{content}}\n</div>\n<div class="modal-footer">\n<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>\n</div>\n</div>';
    prefix = "zonda-util";
    dialog = function(config) {
        var dialog_html;
        dialog.config = config;
        if ($("#" + prefix + "-dialog:visible")[0]) {
            return false;
        }
        dialog_html = Mustache.render(tpl, {
            title: config.title,
            content: config.content
        });
        $(document.body).append(dialog_html);
        if (config.css) {
            $("#" + prefix + "-dialog").css(config.css);
        }
        _.each(config.button, function(button_callback, button_name) {
            var uid;
            uid = _.uniqueId("" + prefix + "-dialog-button-");
            $("#" + prefix + "-dialog .modal-footer").append('<button id="' + uid + '" class="btn btn-success">\n  ' + button_name + "\n</button>");
            return $("#" + uid).click(button_callback);
        });
        dialog.dom = $("#" + prefix + "-dialog");
        $("#" + prefix + "-dialog").on("hide", function() {
            delete $("#" + prefix + "-dialog").modal;
            return $("#" + prefix + "-dialog").remove();
        });
        return dialog;
    };
    dialog.open = function() {
        var outerHeight;
        $("#" + prefix + "-dialog .modal-body").css({
            "max-height": window.innerHeight - 141
        });
        outerHeight = $("#" + prefix + "-dialog").outerHeight();
        $("#" + prefix + "-dialog").css({
            "margin-top": -outerHeight / 2
        });
        $("#" + prefix + "-dialog").modal({
            show: true,
            backdrop: dialog.config.backdrop
        });
        return dialog;
    };
    dialog.close = function(delay) {
        if (delay) {
            setTimeout(function() {
                return $("#" + prefix + "-dialog").modal("hide");
            }, delay);
        } else {
            $("#" + prefix + "-dialog").modal("hide");
        }
        return dialog;
    };
    return module.exports = dialog;
});

// Generated by CoffeeScript 1.6.1
define("/assets/vendor/Zonda/util/StateMachine/StateMachine-debug", [ "underscore-debug", "backbone-debug" ], function(require, exports, module) {
    var Backbone, StateMachine, _;
    _ = require("underscore-debug");
    Backbone = require("backbone-debug");
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

// Generated by CoffeeScript 1.6.1
define("/assets/vendor/Zonda/util/util-debug", [ "./base64/base64-debug", "./dialog/dialog-debug", "./StateMachine/StateMachine-debug", "underscore-debug", "bootstrap-debug", "mustache-debug", "backbone-debug" ], function(require, exports, module) {
    return module.exports = {
        base64: require("./base64/base64-debug"),
        dialog: require("./dialog/dialog-debug"),
        StateMachine: require("./StateMachine/StateMachine-debug")
    };
});