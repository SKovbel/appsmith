(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
      define(['./config', './filter'], factory);
  } else if (typeof exports === 'object') {
      // Node, CommonJS-like
      module.exports = factory(require('./config'), require('./filter'));
  } else {
      // Browser globals (root is window)
      root.myModule = factory(root.config, root.filter);
  }
}(this, function (config, filter) {
  // Your module code here
  return {
      config: config,
      filter: filter
  };
}));

