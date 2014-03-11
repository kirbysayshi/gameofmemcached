var Transform = require('stream').Transform;

var reMagic = /magic/g;

module.exports = function(opts) {
  var p = new Transform(opts);

  p._transform = function(data, encoding, done) {

    var chunk = data.toString();

    chunk = chunk.replace(reMagic, function(match) {
      if (match[0].toUpperCase() === match[0]) {
        return 'Memcached'
      } else {
        return 'memcached'
      }
    });

    this.push(chunk);
    done();
  }

  return p;
}
