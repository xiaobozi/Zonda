(function(){function e(e){var t;if(Object.create)t=Object.create(e);else{function n(){}n.prototype=e,t=new n}return t}var t=Object.prototype,n=Array.prototype,r=Function.prototype,i=String.prototype,s=t.hasOwnProperty,o=n.slice;r.bind||(r.bind=function(t){function n(){if(this instanceof n){var s=e(r.prototype),u=r.apply(s,i.concat(o.call(arguments)));return Object(u)===u?u:s}return r.apply(t,i.concat(o.call(arguments)))}var r=this;if(typeof r!="function")throw new TypeError("Bind must be called on a function");var i=o.call(arguments,1);return n}),Object.keys||(Object.keys=function(){var e=!{toString:""}.propertyIsEnumerable("toString"),t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=t.length;return function(r){if(r!==Object(r))throw new TypeError(r+" is not an object");var i=[];for(var o in r)s.call(r,o)&&i.push(o);if(e)for(var u=0;u<n;u++)s.call(r,t[u])&&i.push(t[u]);return i}}()),Array.isArray||(Array.isArray=function(e){return t.toString.call(e)==="[object Array]"}),n.forEach||(n.forEach=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)n in this&&e.call(t,this[n],n,this)}),n.map||(n.map=function(e,t){var n=this.length>>>0,r=new Array(n);for(var i=0;i<n;i++)i in this&&(r[i]=e.call(t,this[i],i,this));return r}),n.filter||(n.filter=function(e,t){var n=[],r;for(var i=0,s=this.length>>>0;i<s;i++)i in this&&(r=this[i],e.call(t,r,i,this)&&n.push(r));return n}),n.every||(n.every=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&!e.call(t,this[n],n,this))return!1;return!0}),n.some||(n.some=function(e,t){for(var n=0,r=this.length>>>0;n<r;n++)if(n in this&&e.call(t,this[n],n,this))return!0;return!1}),n.reduce||(n.reduce=function(e){if(typeof e!="function")throw new TypeError(e+" is not an function");var t=this.length>>>0,n=0,r;if(arguments.length>1)r=arguments[1];else do{if(n in this){r=this[n++];break}if(++n>=t)throw new TypeError("reduce of empty array with on initial value")}while(!0);for(;n<t;n++)n in this&&(r=e.call(null,r,this[n],n,this));return r}),n.reduceRight||(n.reduceRight=function(e){if(typeof e!="function")throw new TypeError(e+" is not an function");var t=this.length>>>0,n=t-1,r;if(arguments.length>1)r=arguments[1];else do{if(n in this){r=this[n--];break}if(--n<0)throw new TypeError("reduce of empty array with on initial value")}while(!0);for(;n>=0;n--)n in this&&(r=e.call(null,r,this[n],n,this));return r}),n.indexOf||(n.indexOf=function(e,t){var n=this.length>>>0;t=Number(t)||0,t=Math[t<0?"ceil":"floor"](t),t<0&&(t=Math.max(t+n,0));for(;t<n;t++)if(t in this&&this[t]===e)return t;return-1}),n.lastIndexOf||(n.lastIndexOf=function(e,t){var n=this.length>>>0;t=Number(t)||n-1,t=Math[t<0?"ceil":"floor"](t),t<0&&(t+=n),t=Math.min(t,n-1);for(;t>=0;t--)if(t in this&&this[t]===e)return t;return-1}),i.trim||(i.trim=function(){var e=["\\s","00A0","1680","180E","2000-\\u200A","200B","2028","2029","202F","205F","3000"].join("\\u"),t=new RegExp("^["+e+"]+"),n=new RegExp("["+e+"]+$");return function(){return String(this).replace(t,"").replace(n,"")}}()),Date.now||(Date.now=function(){return+(new Date)})})();