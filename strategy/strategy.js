var StrategySettings = require('./settings.js');

function Strategy(){
}

var regexp = /.*(change|update).*settings/gi;

Strategy.prototype = {
    execute: function(message) {
        return new StrategySettings().execute(message);
    },
    apply: function(message) {
        return new StrategySettings().apply(message);
    }
}
module.exports = Strategy;