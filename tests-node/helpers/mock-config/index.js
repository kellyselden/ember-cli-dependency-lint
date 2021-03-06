const config = require('./dependency-lint');

exports.clearConfig = function() {
  for (const key of Object.keys(config)) {
    delete config[key];
  }
};

exports.setConfig = function(newConfig) {
  Object.assign(config, newConfig);
};
