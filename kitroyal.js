import config from "./config.js";
import format from "./format.js";

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
      define(['./config', './filter'], factory);
  } else if (typeof exports === 'object') {
      // Node, CommonJS-like
      module.exports = factory(require('./config'), require('./filter'));
  } else {
      // Browser globals (root is window)

      root.config = config;
      root.format = format;
  }
}(this, function (config, filter) {
  // Your module code here
  return {
      config: config,
      filter: filter
  };
}));

