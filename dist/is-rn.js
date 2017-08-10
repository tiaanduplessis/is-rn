(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.isRn = factory());
}(this, (function () { 'use strict';

var index = function () {
  return navigator && navigator.product === 'ReactNative'
};

return index;

})));
