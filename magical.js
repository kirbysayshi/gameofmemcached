var Transform = require('stream').Transform;

var reMagic = /magic/ig;

module.exports = function(opts) {
  var p = new Transform(opts);

  p._transform = function(data, encoding, done) {
    if (reMagic.test(data.toString())) {
      this.push(data);
    }

    done();
  }

  return p;
}
